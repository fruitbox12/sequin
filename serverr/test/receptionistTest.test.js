const {expect} = require("chai");
const { ethers } = require("hardhat")


describe("Receptionist", async function () {


    it("Makes sure that the room address is equal to that of the receptionist's", async function () {
        //code here
        let deployedReceptionist, deployedRoom

        const [owner, customer] = await ethers.getSigners();

        const Room = await ethers.getContractFactory("Rooms");
        deployedRoom = await Room.deploy();

        const Receptionist = await ethers.getContractFactory("Receptionist");
        deployedReceptionist = await Receptionist.deploy(deployedRoom.address, customer.address);

        const roomAddress = await deployedReceptionist.roomNFTAddress()
        expect(roomAddress).to.be.equal(deployedRoom.address)

    })


})

