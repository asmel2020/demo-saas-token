// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Pausable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact jesusgalicia2019@gmail.com
contract TokenTemplate is ERC20, ERC20Pausable, Ownable {
    bool public isMintable;

    constructor(
        address _initialOwner,
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply,
        bool _isMintable,
        bool isPreSale,
        uint256 preSaleAmount,
        address preSaleAddress
    ) ERC20(_name, _symbol) Ownable(_initialOwner) {
        // Minter
        isMintable = _isMintable;

        if (isPreSale) {
            require(
                preSaleAmount > 0,
                "Amount pre sale must be greater than 0"
            );
            require(
                preSaleAddress != address(0),
                "Address pre sale must be different from 0"
            );
            _mint(preSaleAddress, preSaleAmount);
        }
        _mint(_initialOwner, _initialSupply);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        if (isMintable) {
            _mint(to, amount);
        }
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}
