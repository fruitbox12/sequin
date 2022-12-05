import { ethers } from "hardhat";
// const Rooms = "../artifacts/contracts/Rooms.sol/Rooms.json"
const metadata = "../metadata"
import fs from "fs"
// import "../src/contractInformation"

async function main() {
    const [owner, customer] = await ethers.getSigners();
    const Room = await ethers.getContractFactory("Rooms");
    const room = await Room.deploy();

    await room.deployed();

    const Receptionist = await ethers.getContractFactory("Receptionist");
    const receptionist = await Receptionist.deploy(room.address, owner.address);

    await receptionist.deployed();
    console.log(`Room delivered to receptionist at ${receptionist.address}`);

    // fs.writeFileSync("src/roomAddress.txt", room.address)
    fs.writeFileSync("src/roomAddress.js", `export const roomAddress = "${room.address}"`)
    fs.writeFileSync("src/receptionistAddress.js", `export const receptionistAddress = "${receptionist.address}"`)
    

    for(let i=1; i<8; i++){
        let mintedRoom = await room.mint(`../metadata/item${i}.json`, receptionist.address);
        console.log(`Room minted with hash ${mintedRoom.hash}`)
    }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
