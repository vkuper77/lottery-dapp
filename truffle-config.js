const HDWalletProvider = require('@truffle/hdwallet-provider');
const keys = require('./keys.json');

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    inf_lottery_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(keys.MNEMONIC, `https://goerli.infura.io/v3/${keys.INFURA_PROJECT_ID}`)
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.15"
    }
  }
};
