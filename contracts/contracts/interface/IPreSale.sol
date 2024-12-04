// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.1.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.20;

/**
 * @dev Interface of the ERC-20 standard as defined in the ERC.
 */
interface IPreSale {
    struct PreSaleInfo {
        uint256 startTime; //
        uint256 endTime;
        uint256 priceToken;
        uint256 amountSellToken; // tokens que se venderan
        uint256 amountSoldToken; // tokens vendidos
        uint256 tokenWin; // cantidad de dinero ganado
        address owner;
        bool isPause;
        bool isRewards;
    }

    struct BuyToken {
        address contractAddress;
        uint256 amountSoldToken;
    }

    struct BuyTokenInfo {
        address ownerBuy;
        uint256 amountToken;
        uint256 price;
        uint256 buyDate;
    }

    struct BuyTokenUser {
        uint256 amountToken;
        uint256 price;
        uint256 buyDate;
        bool isRewards;
    }

    event PreSaleCreated(
        address indexed contractAddress,
        address indexed owner,
        uint256 startTime,
        uint256 endTime,
        uint256 priceToken,
        uint256 amountSellToken
    );

    event BuyTokenEvent(
        address indexed ownerBuy,
        address indexed contractAddress,
        uint256 amountToken,
        uint256 buyDate,
        uint256 price
    );

    function createPreSale(
        uint256 startTime,
        uint256 endTime,
        uint256 priceToken,
        uint256 amountSellToken,
        address owner,
        address contractAddress
    ) external;
}
