const { expect } = require("chai");
const { ethers } = require("hardhat")


describe("Receptionist", async function () {

    function etherToWei(_etherAmount: any) {
        return ethers.utils.parseUnits(_etherAmount, "ether")
    }

    let deployedReceptionist: any,
        deployedRoom: any, owner: any, customer: any, transaction: any;
    let IPFSUri = "../metadata/item1.json"

    before(async () => {
        [owner, customer] = await ethers.getSigners();

        const Room = await ethers.getContractFactory("Rooms");
        deployedRoom = await Room.deploy();

        const Receptionist = await ethers.getContractFactory("Receptionist");
        deployedReceptionist = await Receptionist.deploy(deployedRoom.address, owner.address);
        transaction = await deployedRoom.mint(IPFSUri, deployedReceptionist.address)
        await transaction.wait()
        // console.log(deployedReceptionist)
    })

    it("Checks the total supply", async () => {
        let totalSupply = await deployedReceptionist.getTotalSupply()
        console.log(`The total supply of the NFTs minted is ${totalSupply.toString()}`)
        expect(totalSupply).to.not.be.equal("0")
    })

    it("Fetches The Token URI", async () => {
        let tokenURL = await deployedReceptionist.getTokenURL("1")
        console.log(`The deployed token's URL is ${tokenURL}`)
        expect(tokenURL).to.not.be.equal("")
    })


    it("Makes sure that the room address is equal to that of the receptionist's version", async function () {
        const roomAddress = await deployedReceptionist.roomAddress()
        expect(roomAddress).to.be.equal(deployedRoom.address)
    })

    it("Confirms that the customer receives room after rent", async function () {
        await deployedReceptionist.rent(deployedReceptionist.address, customer.address, "1")
        const customerBalance = await deployedRoom.getBalance(customer.address)
        //console.log(customerBalance)
        expect(customerBalance.toString()).to.be.equal("1")
    })

    it("Accepts NFTs", async () => {
        await deployedRoom.connect(customer).approve(deployedReceptionist.address, "1");
        let returnReceipt = await deployedReceptionist.lodgeOut(customer.address, deployedReceptionist.address, "1")
        await returnReceipt.wait()
        console.log(`The hash for the lodge-out transaction is ${returnReceipt.hash}`)
        let customerBalance = await deployedRoom.getBalance(customer.address)
        console.log(`The customer's balance is ${customerBalance.toString()}`)
        expect(customerBalance).to.equal("0")
    })

    it("accepts payment", async () => {
        await expect(deployedReceptionist.connect(customer).pay(owner.address, { value: etherToWei("10") })).to.changeEtherBalances([customer.address, owner.address], [etherToWei("-10"), etherToWei("10")])
        let ownerBalance = await ethers.provider.getBalance(owner.address)
        let customerBalance = await ethers.provider.getBalance(customer.address)
        console.log(`The owner's balance is ${ethers.utils.formatEther(ownerBalance.toString())}`)
        console.log(`The customer's balance is ${ethers.utils.formatEther(customerBalance.toString())}`)
    })

    it("makes sure users cannot rent room twice", async () => {
        // await deployedReceptionist.rent(deployedReceptionist.address, customer.address, "1")
        await expect(deployedReceptionist.rent(deployedReceptionist.address, customer.address, "1")).to.be.reverted;
    })


})

