// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interface/IPreSale.sol";

/// @custom:security-contact jesusgalicia2019@gmail.com
contract PreSale is
    IPreSale,
    Initializable,
    PausableUpgradeable,
    AccessControlUpgradeable,
    UUPSUpgradeable
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    bytes32 public constant CREATE_PRE_SALE_ROLE =
        keccak256("CREATE_PRE_SALE_ROLE");

    mapping(address => PreSaleInfo) public preSaleInfo; // Mapeamento de endereço para informações da pré-venda
    mapping(address => BuyTokenInfo[]) public buyTokenInfo; //  Mapeamento de endereço para informações do token comprado
    mapping(address => mapping(address => BuyTokenUser[])) public buyTokenUser; // Mapeamento de endereço para informações do usuário comprando o token

    IERC20 public token;
    PreSaleInfo[] public allPreSaleInfo;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address _token) public initializer {
        __Pausable_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);
        _grantRole(CREATE_PRE_SALE_ROLE, msg.sender);
        token = IERC20(_token);
    }

    function createPreSale(
        uint256 startTime,
        uint256 endTime,
        uint256 priceToken,
        uint256 amountSellToken,
        address owner,
        address contractAddress
    ) public onlyRole(CREATE_PRE_SALE_ROLE) {
        preSaleInfo[contractAddress] = PreSaleInfo(
            startTime,
            endTime,
            priceToken,
            amountSellToken,
            0,
            0,
            owner,
            false,
            false
        );
        emit PreSaleCreated(
            contractAddress,
            owner,
            startTime,
            endTime,
            priceToken,
            amountSellToken
        );
    }

    function buyToken(
        address _contractAddress,
        uint256 _amountSoldToken
    ) public {
        PreSaleInfo storage saleInfo = preSaleInfo[_contractAddress];
        uint256 balanceBuyer = token.balanceOf(msg.sender);
        uint256 allowanceBuyer = token.allowance(msg.sender, address(this));
        require(!saleInfo.isPause, "PreSale: pause  ");
        require(
            block.timestamp >= saleInfo.startTime &&
                block.timestamp <= saleInfo.endTime,
            "PreSale: Time not reached"
        );

        require(
            _amountSoldToken > 0,
            "PreSale: Amount sold token must be greater than 0"
        );

        require(
            _amountSoldToken <= saleInfo.amountSellToken,
            "PreSale: Amount sold token must be less than or equal to amount sell token"
        );

        uint256 amountTokenPrice = (saleInfo.priceToken * _amountSoldToken) /
            (10 ** 18);
        uint256 amountTokenToSend = _amountSoldToken;

        require(
            balanceBuyer >= amountTokenPrice &&
                allowanceBuyer >= amountTokenPrice,
            "PreSale : insufficient balance and allowance"
        );

        if (amountTokenToSend > saleInfo.amountSellToken) {
            amountTokenToSend = saleInfo.amountSellToken;
        }

        saleInfo.amountSoldToken += _amountSoldToken;
        saleInfo.tokenWin += amountTokenPrice;

        require(
            saleInfo.amountSoldToken < saleInfo.amountSellToken,
            "PreSale: Sold all tokens"
        );

        buyTokenInfo[_contractAddress].push(
            BuyTokenInfo({
                ownerBuy: msg.sender,
                amountToken: amountTokenToSend,
                price: amountTokenPrice,
                buyDate: block.timestamp
            })
        );

        buyTokenUser[msg.sender][_contractAddress].push(
            BuyTokenUser({
                amountToken: amountTokenToSend,
                price: amountTokenPrice,
                buyDate: block.timestamp,
                isRewards: false
            })
        );

        token.transferFrom(msg.sender, address(this), amountTokenPrice);

        emit BuyTokenEvent(
            msg.sender,
            _contractAddress,
            _amountSoldToken,
            block.timestamp,
            amountTokenPrice
        );
    }

    function getPreSaleInfo(
        address contractAddress
    ) public view returns (PreSaleInfo memory) {
        return preSaleInfo[contractAddress];
    }

    function rewardsToken(address _contractToken) external {
        PreSaleInfo storage saleInfo = preSaleInfo[_contractToken];

        require(
            block.timestamp >= saleInfo.endTime,
            "PreSale: Time not reached"
        );

        require(saleInfo.owner == msg.sender, "PreSale : Not owner");

        require(
            !saleInfo.isRewards,
            "PreSale : You have already withdrawn your funds"
        );
        saleInfo.isRewards = true;
        token.transfer(msg.sender, saleInfo.tokenWin);
        IERC20(_contractToken).transfer(
            saleInfo.owner,
            saleInfo.amountSellToken - saleInfo.amountSoldToken
        );
    }

    function rewardsTokenUser(address _contractToken) external {
        PreSaleInfo memory saleInfo = preSaleInfo[_contractToken];

        require(saleInfo.endTime < block.timestamp, "pre sale not end");

        BuyTokenUser[] storage _buyTokenUser = buyTokenUser[msg.sender][
            _contractToken
        ];

        uint256 length = _buyTokenUser.length; // Guardar la longitud del array en memoria para evitar múltiples accesos a storage
        uint256 amountTransfer = 0;
        for (uint256 i = 0; i < length; ++i) {
            if (!_buyTokenUser[i].isRewards) {
                _buyTokenUser[i].isRewards = true;
                amountTransfer += _buyTokenUser[i].amountToken;
            }
        }
        require(amountTransfer > 0, "No token to transfer");

        IERC20(_contractToken).transfer(msg.sender, amountTransfer);
    }

    function getBuyTokenInfo(
        address _contractToken
    ) public view returns (BuyTokenInfo[] memory) {
        return buyTokenInfo[_contractToken];
    }

    function getBuyTokenUser(
        address _contractToken,
        address _owner
    ) public view returns (BuyTokenUser[] memory) {
        return buyTokenUser[_owner][_contractToken];
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(UPGRADER_ROLE) {}
}
