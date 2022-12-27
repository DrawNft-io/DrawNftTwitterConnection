import { ethers, BigNumber } from "ethers";
import DrawNFTGoerli from "./contractInfos/goerli/DrawNFT.json" assert { type: "json" };
import DrawNFTAddressGoerli from "./contractInfos/goerli/DrawNFT-address.json" assert { type: "json" };
import DrawNFTMain from "./contractInfos/goerli/DrawNFT.json" assert { type: "json" };
import DrawNFTAddressMain from "./contractInfos/goerli/DrawNFT-address.json" assert { type: "json" };
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();
const { ALCHEMY_GOERLI_API_KEY, ENV } = process.env;

// Web3 provider
const goerliNetwork = 5;
const provider = new ethers.providers.WebSocketProvider(
  `wss://eth-goerli.g.alchemy.com/v2/${ALCHEMY_GOERLI_API_KEY}`,
  goerliNetwork
);

/**
 * Listens for NFT mint events and calls the given callback function with the minted image.
 * @param callback The function to call when an NFT is minted.
 */
export const listenForMintEvent = async (callback) => {
  const address =
    ENV && ENV == "production"
      ? DrawNFTAddressMain.address
      : DrawNFTAddressGoerli.address;

  const abi = ENV && ENV == "production" ? DrawNFTMain.abi : DrawNFTGoerli.abi;

  // Set up event listener for NFT mint events
  const contract = new ethers.Contract(address, abi, provider);

  contract.on("MintedNft", async (nftId) => {
    try {
      // Get metadata
      const nftMetadataURl = await contract.tokenURI(nftId);

      const ipfsUrl = `https://ipfs.io/ipfs/${nftMetadataURl.substring(7)}`;

      // Make a GET request to the website's URL
      const response = await fetch(ipfsUrl);

      // Parse the response body as JSON
      const data = await response.json();

      // Get Account
      const account = await contract.ownerOf(nftId);
      const imageUrl = `https://ipfs.io/ipfs/${data?.image.substring(7)}`;

      // Call the callback
      callback(nftId, account, imageUrl);
    } catch (e) {
      console.error(`Error in the Conctract.on function: ${e}`);
    }
  });
};
