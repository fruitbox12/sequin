//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


/**
 * @dev the interface property allows you to use the functions of other contracts without having their code
 * remember that interfaces don't have to be inside the main contract
 */

import './Rooms.sol';

contract Receptionist {
    Rooms public roomAddress;
    // address payable public receptionist;
    mapping(address => uint256) private rentRecords;
    uint256 public totalEarnings;
    address payable public owner;

    event e_rent (
        address _sender,
        address _recipient,
        uint256 _tokenId
    );

    event e_pay(
        address _to,
        address _from,
        uint256 _amount
    );

    constructor(Rooms _roomAddress, address payable _owner) {
        roomAddress = _roomAddress;
        // receptionist = _receptionist;
        owner = _owner;
    }

    function rent(address sender, address recipient, uint256 tokenId) public {
        require(rentRecords[msg.sender] != tokenId, "Already rented this room");
        roomAddress.sendNFT(sender, recipient, tokenId);
        rentRecords[msg.sender] = tokenId;
        emit e_rent(sender, recipient, tokenId);
    }

    function lodgeOut(address sender, address recipient, uint256 tokenId) public{
        roomAddress.acceptNFTs(sender, recipient, tokenId);
    }

    function pay(address _to) public payable returns(bool){
        require(msg.value > 0, "Please send a valid amount");
        rentRecords[msg.sender] = msg.value;
        // totalEarnings = earningMapping[msg.sender] + msg.value;
        require(owner == _to, "Unauthorized");
        (bool sent, ) = _to.call{value: msg.value}("");
        emit e_pay(_to, msg.sender, msg.value);
        return sent;
    }

    function getTotalSupply() public view returns(uint256){
        uint256 _totalSupply = roomAddress.totalSupply();
        return _totalSupply;
    }

    function getTokenURL(uint256 _tokenId) public view returns(string memory) {
        string memory URL = roomAddress.tokenURL(_tokenId);
        return URL;
    }

    function getBalance(address _owner) public view returns(uint256){
        uint256 balance = roomAddress.getBalance(_owner);
        return balance;
    }

    // function withdrawFunds() public returns (bool){
    //     // require(sent, "Failed withdrawal");
    //     return sent;
    // }

    receive() external payable{}
    fallback() external payable{}
}
