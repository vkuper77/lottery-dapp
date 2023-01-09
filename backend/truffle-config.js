require("dotenv").config
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    goerli: {
      provider: () => new HDWalletProvider("exercise write stove satisfy essay solution wage sand shrimp type stumble achieve", 'https://goerli.infura.io/v3/a476dc283aa645a3b625ee65de21505b'),
      network_id: '5',
      gas: 4465030
    }
  },
  compilers: {
    solc: {
        version: "0.8.15"  
    }
},
};