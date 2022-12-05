// import { expect } from "chai";

// // const {expect} = require("chai");
// const { ethers } = require("hardhat")


// describe("Rooms", async function () {


//     let Room, deployedRoom: any, deployedReceptionist: any
//     // let IPFSUri = "https://ipfs.io/ipfs/QmQVcpsjrA6crliJjZAodYwmPekYgbnXGo4DFubJiLc2EB/1.json"
//     let IPFSUri = "../metadata/item1.json"
//     let owner: any, customer: any, transaction: any

//     before(async () => {
//         [owner, customer] = await ethers.getSigners();

//         Room = await ethers.getContractFactory("Rooms");
//         deployedRoom = await Room.deploy();
//         const Receptionist = await ethers.getContractFactory("Receptionist");
//         deployedReceptionist = await Receptionist.deploy(deployedRoom.address);
//         transaction = await deployedRoom.mint(IPFSUri, deployedReceptionist.address)
//         await transaction.wait()



//     })

//     it("Mints and transfers the nfts", async () => {
//         console.log(`The transaction hash is ${transaction.hash}`)
//     })

//     it("Checks the total supply", async () => {
//         let totalSupply = await deployedRoom.totalSupply()
//         console.log(`The total supply of the NFTs minted is ${totalSupply.toString()}`)
//         expect(totalSupply).to.not.be.equal("0")
//     })

//     it("Fetches The Token URI", async () => {
//         let tokenURL = await deployedRoom.tokenURL("1")
//         console.log(`The deployed token's URL is ${tokenURL}`)
//         expect(tokenURL).to.not.be.equal("")
//     })

//     it("Delivers NFTs", async () => {
//         let rentReceipt = await deployedRoom.sendNFT(deployedReceptionist.address, customer.address, "1")
//         await rentReceipt.wait()
//         console.log(`The hash for the rental transaction is ${rentReceipt.hash}`)
//         expect(rentReceipt.address).to.not.be.equal("")
//     })

//     it("Gets customer balance", async () => {
//         let customerBalance = await deployedRoom.getBalance(customer.address)
//         console.log(`The customer's balance is ${customerBalance.toString()}`)
//         expect(customerBalance).to.not.be.equal("")
//     })

//     // it("Accepts NFTs", async () => {
//     //     // let rentReceipt = await deployedRoom.sendNFT(deployedReceptionist.address, customer.address, "1")
//     //     // await rentReceipt.wait()
//     //     await deployedReceptionist.approve(deployedReceptionist.address, "1", {from: customer});
//     //     let returnReceipt = await deployedRoom.acceptNFTs(customer.address, deployedReceptionist.address, "1")
//     //     await returnReceipt.wait()
//     //     console.log(returnReceipt)
//     //     let customerBalance = await deployedRoom.getBalance(owner.address)
//     //     console.log(customerBalance)
//     //     expect(customerBalance).to.equal("0")
//     // })
// });




