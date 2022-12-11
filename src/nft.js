import { ethers, BigNumber } from "ethers";
import DrawNFTGoerli from "./contractInfos/goerli/DrawNFT.json" assert { type: "json" };
import DrawNFTAddressGoerli from "./contractInfos/goerli/DrawNFT-address.json" assert { type: "json" };
import DrawNFTMain from "./contractInfos/goerli/DrawNFT.json" assert { type: "json" };
import DrawNFTAddressMain from "./contractInfos/goerli/DrawNFT-address.json" assert { type: "json" };
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();
const { INFURA_WEB_THREE_PROJECT_ID, INFURA_WEB_THREE_PROEJECT_SECRET, ENV } =
  process.env;

// Web3 provider
const goerliNetwork = 5;
const provider = new ethers.providers.WebSocketProvider(
  `wss://:${INFURA_WEB_THREE_PROEJECT_SECRET}@goerli.infura.io/ws/v3/${INFURA_WEB_THREE_PROJECT_ID}`,
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
    // Get metadata
    const nftMetadataURl = await contract.tokenURI(nftId);

    // Make a GET request to the website's URL
    const response = await fetch(nftMetadataURl);

    // Parse the response body as JSON
    const data = await response.json();

    // Get Account
    const account = await contract.ownerOf(nftId);

    // Call the callback
    callback(nftId, account, data?.image);
  });
};
