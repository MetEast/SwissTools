# METEAST TOOLS

### Introduction
MetEast tool is made up of such features:

- Mint tool
- Sell tool



### HowTo

- Set enviroment
Clone the repository onto your local device, and install all depedencies

```shell
$ git clone https://github.com/MetEast/MetTools.git
$ npm install
```

then, configurate config.js, 
  - put your private key in the network config item
  - set ENVIRONMENT "test" for testnet, "main" for mainnet
  - update IPFS_UPLOAD_URL, IPFS_NODE_URL, SERVICE_URL, BACKEND_URL according to ENVIRONMENT
  - configurate products
    file: supported file extensions
    category: categories of NFTs in MetEast
    saleType: "buynow" for fixed price, "auction" for auction
    sellPrice: default price(minimum price) for sale
    auctionDays: default auction duration in days 
  - in order to mint, put source of images in "/src" folder and make mint.json in "/metadata" folder


```javascript
module.exports = {
  networks: {
    mainnet: {
      url: "https://api.elastos.io/esc",
      accounts: [],
    },
    testnet: {
      url: "https://api-testnet.elastos.io/eth",
      accounts: [],
    },
  },
  ENVIRONMENT: "test",
  METEAST_CONTRACT_ADDRESS: "0xd50BEDAD0985041fDf1270AE44034005456e5233",
  METEAST_MARKET_CONTRACT_ADDRESS: "0x525805f96CEf178AD8d4Ca37E4a2c29262f7ae93",
  METOKEN_MINING_REWARD_CONTRACT_ADDRESS: "0xb2EEe61F17A88D5e9bd2184D91cdd84E2278d269",
};
```

**Notice**: *put your private key string in the item "accounts"*.

- Generate the list of files in '/src/' folder
Run the following command in the terminal to generate mint.json file.

```shell
$ node ./scripts/mint_gen_input.js
```

- Mint
Run the following command in the terminal to mint NFTs.

```shell
$ node ./scripts/mint.js
```

- Generate the list of unlisted NFTs to '/metadata/sell.json'
Run the following command in the terminal to generate sell.json file.

```shell
$ node ./scripts/sell_gen_input.js
```

- Sell
Run the following command in the terminal to sell NFTs.

```shell
$ node ./scripts/sell.js
```



