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
    development: {
      url: "http://127.0.0.1:8545",     // Localhost (default: none)
      gas: 5000000,
      gasPrice: 200000000000,
    },
  },

  mocha: { timeout: 12000000 },

};
