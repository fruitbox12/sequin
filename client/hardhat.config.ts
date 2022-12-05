// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// //import "@nomiclabs/hardhat-waffle";

// const config: HardhatUserConfig = {
//   solidity: "0.8.17",
// };

// export default config;



import "@nomicfoundation/hardhat-toolbox";
// require("@nomicfoundation/hardhat-toolbox")




module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
    kovan: {
      url: "",
      accounts: {
          mnemonic: "MNEMONIC",
      },
      saveDeployments: true,
      chainId: 42,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  // mocha: {
  //   timeout: 200000, // 200 seconds max for running tests
  // },
}
