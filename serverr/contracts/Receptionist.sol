//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


/**
 * @dev the interface property allows you to use the functions of other contracts without having their code
 * remember that interfaces don't have to be inside the main contract
 */


import './Rooms.sol';

contract Receptionist {
    Rooms public roomAddress;
    address public customer;
    address payable public receptionist;

    // Rooms private _Rooms

    // Rooms public rooms;

    constructor(Rooms _roomAddress, address _customer) {
        roomAddress = _roomAddress;
        customer = _customer;
    }

    function rent(uint tokenId) public payable {
        string memory _tokenURI = roomAddress.tokenURI(tokenId);
        roomAddress.mint(_tokenURI, msg.sender);
        roomAddress.transferFrom(msg.sender, address(this), tokenId);
    }

    function receiveRoom(address sender, address recipient, uint256 tokenId) public{
        roomAddress.acceptNFTs(sender, recipient, tokenId);
    }
}
