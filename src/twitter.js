import Twitter from "twitter-lite";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

// Initialize the Twitter client
const twitterClient = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY || "",
  consumer_secret: TWITTER_CONSUMER_SECRET || "",
  access_token_key: TWITTER_ACCESS_TOKEN_KEY || "",
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET || "",
});

const uploadTwitterClient = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY || "",
  consumer_secret: TWITTER_CONSUMER_SECRET || "",
  access_token_key: TWITTER_ACCESS_TOKEN_KEY || "",
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET || "",
  subdomain: "upload",
});

/**
 * Posts a tweet with the given text and image.
 * @param text The text of the tweet.
 * @param image The image to include in the tweet (optional).
 */
export const tweet = (text, imageUrl) => {
  axios
    .get(imageUrl, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      // Check if the response is successful
      if (response.status === 200) {
        // Get the image data from the response object
        const imageData = response.data;

        uploadTwitterClient
          .post("media/upload", {
            media: imageData.toString("base64"),
          })
          .then((media) => {
            const mediaId = media.media_id_string;
            twitterClient
              .post("statuses/update", {
                status: text,
                media_ids: [mediaId],
              })
              .catch(console.error);
          });
      } else {
        // Handle error if the response is not successful
      }
    })
    .catch(console.error);
};
