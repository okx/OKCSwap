require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },

  networks: {
    hardhat: {
      gas: 10000000,
      blockGasLimit: 12500000,
      gasPrice: 20000000000,
      accounts: {
        count: 1000
      }
    },
    okcMain: {
      url: 'https://exchainrpc.okex.org',
      accounts:[process.env.PRIVATE_KEY_MAIN]
    },
  },

  mocha: { timeout: 12000000 },

};
