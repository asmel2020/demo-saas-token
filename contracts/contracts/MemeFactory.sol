// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Create2.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interface/IPreSale.sol";
import "./TokenTemplate.sol";

contract MemeFactory is
    Initializable,
    PausableUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    event Deployed(
        address indexed contractAddress,
        address indexed owner,
        uint256 indexed initialSupply
    );

    struct Deploy {
        string name;
        string symbol;
        uint256 initialSupply;
        bool isSupplyMintable;
        bool isPreSale;
        uint256 startTime;
        uint256 endTime;
        uint256 priceToken;
        uint256 amountSellToken;
        bytes32 salt;
    }

    struct PricePlan {
        uint256 priceDeployToken;
        uint256 pricePreSaleToken;
    }

    PricePlan public pricePlan;

    mapping(bytes32 => address) public deployedContractsMap;

    address[] public deployedContracts;

    IPreSale public iPreSale;

    IERC20 public token;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        address _contractAddressPreSale,
        address _token
    ) public initializer {
        __Pausable_init();
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        iPreSale = IPreSale(_contractAddressPreSale);
        token = IERC20(_token);
        pricePlan = PricePlan(10 ether, 10 ether);
    }

    function deploy(Deploy memory _deploy) external {
        // Generar el bytecode del contrato hijo (ChildContract)

        uint256 balanceBuyer = token.balanceOf(msg.sender);
        uint256 allowanceBuyer = token.allowance(msg.sender, address(this));
        uint256 priceDeploy = pricePlan.priceDeployToken;
        uint256 initialSupply = _deploy.initialSupply;

        if (_deploy.isPreSale) {
            require(
                _deploy.startTime < _deploy.endTime,
                "PreSale: Start time must be less than end time"
            );

            require(
                _deploy.priceToken > 0,
                "PreSale: Price token must be greater than 0"
            );

            require(
                _deploy.amountSellToken > 0,
                "PreSale: Amount sell token must be greater than 0"
            );

            require(
                _deploy.amountSellToken <= _deploy.initialSupply,
                "PreSale: Amount sell token must be less than or equal to initial supply"
            );

            initialSupply -= _deploy.amountSellToken;

            priceDeploy += pricePlan.pricePreSaleToken;
        }

        require(
            balanceBuyer >= priceDeploy && allowanceBuyer >= priceDeploy,
            "MemeFactory : insufficient balance and allowance"
        );

        bytes memory bytecode = abi.encodePacked(
            type(TokenTemplate).creationCode, // Obtiene el bytecode del contrato
            abi.encode(
                msg.sender,
                _deploy.name,
                _deploy.symbol,
                initialSupply,
                _deploy.isSupplyMintable,
                _deploy.isPreSale,
                _deploy.amountSellToken,
                address(iPreSale)
            ) // Datos para el constructor
        );

        // Usamos Create2 para desplegar el contrato
        address deployedAddress = Create2.deploy(
            0, // Enviar 0 ETH
            _deploy.salt, // Salt único para el despliegue
            bytecode
        );

        if (_deploy.isPreSale) {
            iPreSale.createPreSale(
                _deploy.startTime,
                _deploy.endTime,
                _deploy.priceToken,
                _deploy.amountSellToken,
                msg.sender,
                deployedAddress
            );
        }

        deployedContracts.push(deployedAddress);
        token.transferFrom(msg.sender, address(this), priceDeploy);
        emit Deployed(deployedAddress, msg.sender, _deploy.initialSupply);
    }

    // Obtener todas las direcciones de contratos desplegados
    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }

    function calculateAddress(
        Deploy memory _deploy
    ) external view returns (address) {
        bytes memory bytecode = abi.encodePacked(
            type(TokenTemplate).creationCode,
            abi.encode(
                msg.sender,
                _deploy.name,
                _deploy.symbol,
                _deploy.initialSupply - _deploy.amountSellToken,
                _deploy.isSupplyMintable,
                _deploy.isPreSale,
                _deploy.amountSellToken,
                address(iPreSale)
            )
        );

        return Create2.computeAddress(_deploy.salt, keccak256(bytecode));
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
