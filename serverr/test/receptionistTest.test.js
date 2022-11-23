const { expect } = require("chai");
const { ethers } = require("hardhat")


describe("Receptionist", async function () {

    let deployedReceptionist, deployedRoom, owner, customer, transaction;
    let IPFSUri = "../metadata/item1.json"


    before(async () => {
        [owner, customer] = await ethers.getSigners();

        const Room = await ethers.getContractFactory("Rooms");
        deployedRoom = await Room.deploy();

        const Receptionist = await ethers.getContractFactory("Receptionist");
        deployedReceptionist = await Receptionist.deploy(deployedRoom.address, customer.address);
        transaction = await deployedRoom.mint(IPFSUri, deployedReceptionist.address)
        await transaction.wait()
    })


    it("Makes sure that the room address is equal to that of the receptionist's version", async function () {
        const roomAddress = await deployedReceptionist.roomAddress()
        expect(roomAddress).to.be.equal(deployedRoom.address)
    })

    it("Confirms that the customer receives room after rent", async function () {
        await deployedReceptionist.rent(deployedReceptionist.address, customer.address, "1")
        const customerBalance = await deployedRoom.getBalance(customer.address)
        //console.log(customerBalance)
        expect(customerBalance).to.be.equal("1")
    })

    it("Accepts NFTs", async () => {
        await deployedRoom.connect(customer).approve(deployedReceptionist.address, "1");
        let returnReceipt = await deployedReceptionist.lodgeOut(customer.address, deployedReceptionist.address, "1")
        await returnReceipt.wait()
        console.log(returnReceipt.hash)
        let customerBalance = await deployedRoom.getBalance(owner.address)
        console.log(customerBalance)
        expect(customerBalance).to.equal("0")
    })


})

