// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable avoid-low-level-calls */
/* solhint-disable no-inline-assembly */
/* solhint-disable reason-string */

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

import "../core/BaseAccount.sol";
import "../safe-contracts/Safe.sol";
import "./EllipticCurve.sol";
import "../utils/Exec.sol";


interface IVerifier {
    function verifyProof(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) external view returns (bool);
}

/**
 * minimal account.
 *  this is sample minimal account.
 *  has execute, eth handling methods
 *  has a single signer that can send requests through the entryPoint.
 */
contract NewTouchIdAccountSafe is Safe {
    using ECDSA for bytes32;

    //filler member, to push the nonce and owner to the same slot
    // the "Initializeble" class takes 2 bytes in the first slot
    bytes28 private _filler;

    //explicit sizes of nonce, to fit a single storage cell with "owner"
    address public owner;

    address public entryPoint;
    uint[2] qValues;
    address ellipticCurve;


    //return value in case of signature failure, with no time-range.
    uint256 constant internal SIG_VALIDATION_FAILED = 1;

    // event SimpleAccountInitialized(
    //     IEntryPoint indexed entryPoint,
    //     address indexed owner
    // );

    modifier onlyOwner() {
        _onlyOwner();
        _;
    }

    // function nonce() public view virtual override returns (uint256) {
    //     return _nonce;
    // }

    // function entryPoint() public view virtual override returns (IEntryPoint) {
    //     return _entryPoint;
    // }

    // solhint-disable-next-line no-empty-blocks
    // receive() external payable {}

    // constructor(IEntryPoint anEntryPoint) {
    //     _entryPoint = anEntryPoint;
    //     // _disableInitializers();
    // }

    function _onlyOwner() internal view {
        //directly from EOA owner, or through the account itself (which gets redirected through execute())
        require(
            msg.sender == owner || msg.sender == address(this),
            "only owner"
        );
    }

    /// @dev Setup function sets initial storage of contract.
    /// @param _owners List of Safe owners.
    /// @param _threshold Number of required confirmations for a Safe transaction.
    /// @param to Contract address for optional delegate call.
    /// @param data Data payload for optional delegate call.
    /// @param fallbackHandler Handler for fallback calls to this contract
    /// @param paymentToken Token that should be used for the payment (0 is ETH)
    /// @param payment Value that should be paid
    /// @param paymentReceiver Address that should receive the payment (or 0 if tx.origin)
    /// @param _entryPoint Address for the trusted EIP4337 entrypoint
    function setupWithEntrypoint(
        address[] calldata _owners,
        uint256 _threshold,
        address to,
        bytes calldata data,
        address fallbackHandler,
        address paymentToken,
        uint256 payment,
        address payable paymentReceiver,
        address _entryPoint,
        uint256[2] memory _qValues,
        address _ellipticCurve
    ) external {
        entryPoint = _entryPoint;
        qValues = _qValues;
        ellipticCurve = _ellipticCurve;

        _executeAndRevert(
            address(this),
            0,
            abi.encodeCall(Safe.setup, (
                _owners, _threshold,
                to, data,
                fallbackHandler,paymentToken,
                payment, paymentReceiver
            )),
            Enum.Operation.DelegateCall
        );
    }


    // called by entryPoint, only after validateUserOp succeeded.
    function execFromEntryPoint(
        address dest,
        uint256 value,
        bytes calldata func
    ) external {
        // _requireFromEntryPoint();
        // (uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory d) = abi.decode(
        //   func,
        //   (uint256[2], uint256[2][2], uint256[2], uint256[2])
        // );
        // testTransfer(a, b, c, d, dest, value);
        _call(dest, value, func);
    }

    function exec(
        address dest,
        uint256 value,
        bytes[] calldata func
    ) external onlyOwner {
        // (
        //     uint256[2] memory a,
        //     uint256[2][2] memory b,
        //     uint256[2] memory c,
        //     uint256[2] memory input
        // ) = abi.decode(
        //         func[1],
        //         (uint256[2], uint256[2][2], uint256[2], uint256[2])
        //     );
        // require(isProofValid(a, b, c, input), "Invalid proof");
        _call(dest, value, func[0]);
    }

    /**
     * execute a sequence of transaction
     */
    function execBatch(
        address[] calldata dest,
        bytes[] calldata func
    ) external onlyOwner {
        require(dest.length == func.length, "wrong array lengths");
        for (uint256 i = 0; i < dest.length; i++) {
            _call(dest[i], 0, func[i]);
        }
    }

    /**
     * execute a transaction (called directly from owner, or by entryPoint)
     */
    // function execute(
    //     address dest,
    //     uint256 value,
    //     bytes calldata func
    // ) external {
    //     _requireFromEntryPointOrOwner();
    //     _call(dest, value, func);
    // }

    /**
     * execute a sequence of transactions
     */
    function executeBatch(
        address[] calldata dest,
        bytes[] calldata func
    ) external {
        _requireFromEntryPointOrOwner();
        require(dest.length == func.length, "wrong array lengths");
        for (uint256 i = 0; i < dest.length; i++) {
            _call(dest[i], 0, func[i]);
        }
    }

    function _payPrefund(uint256 missingAccountFunds) internal {
        if (missingAccountFunds != 0) {
            (bool success,) = payable(msg.sender).call{value : missingAccountFunds, gas : type(uint256).max}("");
            (success);
            //ignore failure (its EntryPoint's job to verify, not account.)
        }
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 missingAccountFunds)
    external  returns (uint256 validationData) {
        // _requireFromEntryPoint();
        validationData = _validateSignature(userOp, userOpHash);
        if (userOp.initCode.length == 0) {
            _validateAndUpdateNonce(userOp);
        }
        _payPrefund(missingAccountFunds);
    }

    // function initialize(
    //     address anOwner,
    //     uint[2] memory _qValues,
    //     address _ellipticCurve
    // ) public virtual initializer {
    //     _initialize(anOwner, _qValues, _ellipticCurve);
    // }

    // function _initialize(
    //     address anOwner,
    //     uint[2] memory _qValues,
    //     address _ellipticCurve
    // ) internal virtual {
    //     owner = anOwner;
    //     qValues = _qValues;
    //     ellipticCurve = _ellipticCurve;
    //     emit SimpleAccountInitialized(_entryPoint, owner);
    // }

    // Require the function call went through EntryPoint or owner
    function _requireFromEntryPointOrOwner() internal view {
        require(
            msg.sender == entryPoint || msg.sender == owner,
            "account: not Owner or EntryPoint"
        );
    }

    /// implement template method of BaseAccount
    function _validateAndUpdateNonce(
        UserOperation calldata userOp
    ) internal {
        require(nonce++ == userOp.nonce, "account: invalid nonce");
    }

    /// implement template method of BaseAccount
    function _validateSignature(
        UserOperation calldata userOp,
        bytes32 userOpHash
    ) internal virtual returns (uint256 validationData) {
        (uint r, uint s, bytes32 message) = abi.decode(
            userOp.signature,
            (uint, uint, bytes32)
        );
        bool success = EllipticCurve(ellipticCurve).validateSignature(
            message,
            [r, s],
            qValues
        );
        // bytes32 hash = userOpHash.toEthSignedMessageHash();
        if (!success) return SIG_VALIDATION_FAILED;
        return 0;
    }

    function _call(address target, uint256 value, bytes memory data) internal {
        (bool success, bytes memory result) = target.call{value: value}(data);
        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    }

    /**
     * check current account deposit in the entryPoint
     */
    function getDeposit() public view returns (uint256) {
        return IEntryPoint(entryPoint).balanceOf(address(this));
    }

    /**
     * deposit more funds for this account in the entryPoint
     */
    function addDeposit() public payable {
        IEntryPoint(entryPoint).depositTo{value: msg.value}(address(this));
    }

    /**
     * withdraw value from the account's deposit
     * @param withdrawAddress target to send to
     * @param amount to withdraw
     */
    function withdrawDepositTo(
        address payable withdrawAddress,
        uint256 amount
    ) public onlyOwner {
        IEntryPoint(entryPoint).withdrawTo(withdrawAddress, amount);
    }

    function _executeAndRevert(
        address to,
        uint256 value,
        bytes memory data,
        Enum.Operation operation
    ) internal {

        bool success = execute(
            to,
            value,
            data,
            operation,
            type(uint256).max
        );

        bytes memory returnData = Exec.getReturnData(type(uint256).max);
        // Revert with the actual reason string
        // Adopted from: https://github.com/Uniswap/v3-periphery/blob/464a8a49611272f7349c970e0fadb7ec1d3c1086/contracts/base/Multicall.sol#L16-L23
        if (!success) {
            if (returnData.length < 68) revert();
            assembly {
                returnData := add(returnData, 0x04)
            }
            revert(abi.decode(returnData, (string)));
        }
    }

    /// @dev There should be only one verified entrypoint per chain
    /// @dev so this function should only be used if there is a problem with
    /// @dev the main entrypoint
    function replaceEntrypoint(address newEntrypoint) public authorized {
        entryPoint = newEntrypoint;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal view {
        (newImplementation);
        _onlyOwner();
    }
}
