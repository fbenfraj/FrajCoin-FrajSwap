// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./FrajCoin.sol";

// Learn more about the ERC20 implementation
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable
import "@openzeppelin/contracts/access/Ownable.sol";

contract FrajSwap is Ownable {
    // FrajCoin Contract
    address public admin;
    FrajCoin frajcoin;

    // token price for ETH
    uint256 public tokensPerEth = 100;

    // Event that log buy operation
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
    event SellTokens(
        address seller,
        uint256 amountOfTokens,
        uint256 amountOfETH
    );

    constructor(address tokenAddress) {
        frajcoin = FrajCoin(tokenAddress);
        admin = msg.sender;
    }

    /**
     * @notice Allow users to buy tokens for ETH
     */
    function buyTokens() public payable returns (uint256 tokenAmount) {
        require(msg.value > 0, "Send ETH to buy some tokens");

        uint256 amountToBuy = msg.value * tokensPerEth;

        // check if the DEX Contract has enough amount of tokens for the transaction
        uint256 dexBalance = frajcoin.balanceOf(address(this));
        require(
            dexBalance >= amountToBuy,
            "DEX contract has not enough tokens in its balance"
        );

        // Transfer token to the msg.sender
        bool sent = frajcoin.transfer(msg.sender, amountToBuy);
        require(sent, "Failed to transfer token to user");

        // emit the event
        emit BuyTokens(msg.sender, msg.value, amountToBuy);

        return amountToBuy;
    }

    /**
     * @notice Allow users to sell tokens for ETH
     */
    function sellTokens(uint256 tokenAmountToSell) public {
        // Check that the requested amount of tokens to sell is more than 0
        require(
            tokenAmountToSell > 0,
            "Specify an amount of token greater than zero"
        );

        // Check that the user's token balance is enough to do the swap
        uint256 userBalance = frajcoin.balanceOf(msg.sender);
        require(
            userBalance >= tokenAmountToSell,
            "Your balance is lower than the amount of tokens you want to sell"
        );

        // Check that the DEX's balance is enough to do the swap
        uint256 amountOfETHToTransfer = tokenAmountToSell / tokensPerEth;
        uint256 ownerETHBalance = address(this).balance;
        require(
            ownerETHBalance >= amountOfETHToTransfer,
            "DEX has not enough funds to accept the sell request"
        );

        bool sent = frajcoin.transferFrom(
            msg.sender,
            address(this),
            tokenAmountToSell
        );
        require(sent, "Failed to transfer tokens from user to DEX");

        (sent, ) = msg.sender.call{value: amountOfETHToTransfer}("");
        require(sent, "Failed to send ETH to the user");
    }

    /**
     * @notice Allow the owner of the contract to withdraw ETH
     */
    function withdraw() public {
        require(msg.sender == admin, "Admin only.");
        uint256 ownerBalance = address(this).balance;
        require(ownerBalance > 0, "Owner has not balance to withdraw");

        (bool sent, ) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to send user balance back to the owner");
    }
}
