const Web3 = require("web3");
const METOKEN_MINING_REWARD_CONTACT_ABI = require("../contracts/MiningReward");
const config = require("../config");

const withdrawBuyerReward = async (env) => {
  console.log("Withdrawing Buyer Reward ....");
  const web3 = new Web3(
    env == "test" ? config.networks.testnet.url : config.networks.mainnet.url
  );
  const miningRewardContract = new web3.eth.Contract(
    METOKEN_MINING_REWARD_CONTACT_ABI,
    config.METOKEN_MINING_REWARD_CONTRACT_ADDRESS
  );

  const account = await web3.eth.accounts.privateKeyToAccount(
    env == "test"
      ? config.networks.testnet.accounts[0]
      : config.networks.mainnet.accounts[0]
  );
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;
  console.log("Accounts: ", web3.eth.defaultAccount);

  const transactionParams = {
    from: web3.eth.defaultAccount,
    gasPrice: await web3.eth.getGasPrice(), // can be changed
    gas: 5000000, // can be changed
    value: 0,
  };

  const availableAmount = await miningRewardContract.methods
    .getAvailableRewardAsBuyer(web3.eth.defaultAccount)
    .call();
  console.log("Available buyer rewards: ", availableAmount);
  if (parseInt(availableAmount)) {
    await miningRewardContract.methods
      .withdrawBuyerReward()
      .send(transactionParams)
      .once("transactionHash", (hash) => {
        console.log("Tx Hash: ", hash);
      })
      .once("receipt", (receipt) => {
        // console.log("receipt", receipt);
        console.log(
          "Withdraw Buyer Reward Success =========>>",
          availableAmount / 1e18
        );
      })
      .on("error", (error) => {
        console.log(
          "Withdraw Buyer Reward Error =========>>",
          availableAmount / 1e18
        );
        console.error(error);
      });
  }
  console.log("");
};

const withdrawCreatorReward = async (env) => {
  console.log("Withdrawing Creator Reward ....");
  const web3 = new Web3(
    env == "test" ? config.networks.testnet.url : config.networks.mainnet.url
  );
  const miningRewardContract = new web3.eth.Contract(
    METOKEN_MINING_REWARD_CONTACT_ABI,
    config.METOKEN_MINING_REWARD_CONTRACT_ADDRESS
  );

  const account = await web3.eth.accounts.privateKeyToAccount(
    env == "test"
      ? config.networks.testnet.accounts[0]
      : config.networks.mainnet.accounts[0]
  );
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;
  console.log("Accounts: ", web3.eth.defaultAccount);

  const transactionParams = {
    from: web3.eth.defaultAccount,
    gasPrice: await web3.eth.getGasPrice(), // can be changed
    gas: 5000000, // can be changed
    value: 0,
  };

  const availableAmount = await miningRewardContract.methods
    .getAvailableRewardAsCreator(web3.eth.defaultAccount)
    .call();
  console.log("Available creator rewards: ", availableAmount);
  if (parseInt(availableAmount)) {
    await miningRewardContract.methods
      .withdrawCreatorReward()
      .send(transactionParams)
      .once("transactionHash", (hash) => {
        console.log("Tx Hash: ", hash);
      })
      .once("receipt", (receipt) => {
        // console.log("receipt", receipt);
        console.log(
          "Withdraw Creator Reward Success =========>>",
          availableAmount / 1e18
        );
      })
      .on("error", (error) => {
        console.log(
          "Withdraw Creator Reward Error =========>>",
          availableAmount / 1e18
        );
        console.error(error);
      });
  }
  console.log("");
};

const withdrawStakerReward = async (env) => {
  console.log("Withdrawing Staker Reward ....");
  const web3 = new Web3(
    env == "test" ? config.networks.testnet.url : config.networks.mainnet.url
  );
  const miningRewardContract = new web3.eth.Contract(
    METOKEN_MINING_REWARD_CONTACT_ABI,
    config.METOKEN_MINING_REWARD_CONTRACT_ADDRESS
  );

  const account = await web3.eth.accounts.privateKeyToAccount(
    env == "test"
      ? config.networks.testnet.accounts[0]
      : config.networks.mainnet.accounts[0]
  );
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;
  console.log("Accounts: ", web3.eth.defaultAccount);

  const transactionParams = {
    from: web3.eth.defaultAccount,
    gasPrice: await web3.eth.getGasPrice(), // can be changed
    gas: 5000000, // can be changed
    value: 0,
  };

  const availableAmount = await miningRewardContract.methods
    .getAvailableRewardAsStaker(web3.eth.defaultAccount)
    .call();
  console.log("Available staker rewards: ", availableAmount);

  if (parseInt(availableAmount)) {
    await miningRewardContract.methods
      .withdrawStakerReward()
      .send(transactionParams)
      .once("transactionHash", (hash) => {
        console.log("Tx Hash: ", hash);
      })
      .once("receipt", (receipt) => {
        // console.log("receipt", receipt);
        console.log(
          "Withdraw Staker Reward Success =========>>",
          availableAmount / 1e18
        );
      })
      .on("error", (error) => {
        console.log(
          "Withdraw Staker Reward Error =========>>",
          availableAmount / 1e18
        );
        console.error(error);
      });
  }
  console.log("");
};

const withdrawTool = async () => {
  try {
    await withdrawBuyerReward(config.ENVIRONMENT);
    await withdrawCreatorReward(config.ENVIRONMENT);
    await withdrawStakerReward(config.ENVIRONMENT);
    console.log(
      "=================== Withdraw Reward Success ==================="
    );
  } catch (err) {
    console.error(err);
    console.log(
      "=================== Withdraw Reward Failed ==================="
    );
  }
};

(async () => {
  try {
    await withdrawTool();
  } catch (err) {
    console.error(err);
  }
})();

module.exports = {
  withdrawTool,
};
