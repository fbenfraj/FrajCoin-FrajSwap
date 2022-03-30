// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Learn more about the ERC20 implementation
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FrajCoin is ERC20 {
    address public admin;

    constructor() ERC20("FrajCoin", "FRAJ") {
        admin = msg.sender;
        _mint(msg.sender, 1000 * 10**18);
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == admin, "Admin only.");
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        require(msg.sender == admin, "Admin only.");
        _burn(msg.sender, amount);
    }
}
