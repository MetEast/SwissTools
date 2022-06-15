# SWISS TOOLS

### Introduction
Swiss tool is made up of such features:

- Withdraw Reward Tool



### HowTo

- Set enviroment
Clone the repository onto your local device, and install all depedencies

```shell
$ git clone https://github.com/MetEast/SwissTools.git
$ npm install
```

then, configurate config.js, 
  - put your private key in the network config item
  - set ENVIRONMENT "test" for testnet, "main" for mainnet
  - update METOKEN_MINING_REWARD_CONTRACT_ADDRESS according to ENVIRONMENT


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

- Withdraw Rewards
Run the following command in the terminal to withdraw mining rewards.

```shell
$ node ./scripts/withdraw_reward.js
```
