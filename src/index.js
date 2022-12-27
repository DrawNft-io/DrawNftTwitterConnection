import { listenForMintEvent } from "./nft.js";
import { tweet } from "./twitter.js";

// TODO: Change this
const OpenSeaAddress = "google.com";

// Listen for NFT mint events and tweet about them
listenForMintEvent((nftId, account, nftImageUrl) => {
  if (nftImageUrl) {
    const text = `NFT#${nftId} is minted by ${account}.\r\n\r\nCheckout on OpenSea ${OpenSeaAddress}/${nftId}`;

    tweet(text, nftImageUrl);
  }
}).catch(console.error);
