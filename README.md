# DrawNftTwitterConnection

DrawNftTwitterConnection is a Node.js application that connects to the DrawNFT.io NFT minter and listens for mint events. When an NFT is minted, the application generates a tweet about the mint event and posts it on Twitter.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need to have Node.js and pnpm installed on your machine. You can download and install them from the [official Node.js website](https://nodejs.org/en/download/).

### Installing

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/DrawNft-io/DrawNftTwitterConnection
```
2. Navigate to the project directory and install the dependencies using the following command:

```
pnpm install
```

3. Create a `.env` file in the root directory of the project and populate it with the following environment variables:

```
INFURA_WEB_THREE_PROJECT_ID=
INFURA_WEB_THREE_PROEJECT_SECRET=
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=
ENV='development'
```

4. Replace the `INFURA_WEB_THREE_PROJECT_ID` and `INFURA_WEB_THREE_PROEJECT_SECRET` values with the values of your Infura Web3 project ID and secret, respectively.

5. Replace the `TWITTER_CONSUMER_KEY` and `TWITTER_CONSUMER_SECRET`, `TWITTER_ACCESS_TOKEN_KEY`, `TWITTER_ACCESS_TOKEN_SECRET` values with the values of your Twitter credentials.


6. Set the `ENV` variable to `"production"` if you want to use the mainnet version of the DrawNFT contract

7. Start the application using the following command:

```
pnpm start
```

This will start the application and it will start listening for NFT mint events from the DrawNFT.io contract. When an NFT is minted, the application will generate a tweet about the mint event and post it on Twitter.

## Built With

* ethers.js - A JavaScript library for interacting with Ethereum
* node-fetch - A light-weight module that brings window.fetch to Node.js
* twitter-lite - A lightweight JavaScript client library for the Twitter API

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.