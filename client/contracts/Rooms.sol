//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Rooms is ERC721URIStorage{
// contract Rooms is ERC721{
    /**
     * @dev the counter library contains code that can be used to attach a counter to things
     * you can increment or decrement them or reset the counter by calling the library's functions
     * 
     */

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor () ERC721("Sequin", "SEQ"){
        
    }

    /**
     * @dev the mint function i'm calling here takes in a token URI as a parameter
     * it mints this token and increments the counter of the number of NFTs minted
     * it then assigns an ID to this minted token as illustrated by uint256 newItemId = _tokenIds.current()
     * naturally, the _mint() function takes in the name of the recipient and the ID of the NFT as parameters
     * the _setTokenURI function also adds the id and the token URI to the created NFT's metadata
    */

    function mint(string memory tokenURI, address recipient) public returns(uint){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;

    }

    /**
     * @dev the _tokenSupply is an artificial functions with which i can check the number of tokens minted
    */

    function totalSupply() public view returns(uint256){
        return _tokenIds.current();
    }

    function tokenURL(uint256 _tokenId) view public returns(string memory){
        string memory tokenLink = tokenURI(_tokenId);
        return tokenLink;
    }

    function acceptNFTs(address sender, address recipient, uint256 tokenId) public{
        transferFrom(sender, recipient, tokenId);
    }

    function sendNFT(address sender, address recipient, uint256 tokenId) public{
        _transfer(sender, recipient, tokenId);
    }

    function getBalance(address _owner) public view returns(uint256){
        uint256 balance = balanceOf(_owner);
        return balance;
    }
}
