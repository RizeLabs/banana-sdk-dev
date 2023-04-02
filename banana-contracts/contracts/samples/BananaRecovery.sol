// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

contract BananaRecovery {
    
    address public recoveryAddress;
    
    uint256 public unlockTime;
    
    bool public inRecovery;
    
    uint256[2] nextQValues;

    //Banana wallet recovery trustedRelayer address
    address public trustedRelayer = 0x605D0Cb492423De25C690aA316a9da4Af935Bcc4;

    //q values for the elliptic curve representing the public key of the user
    uint256[2] qValues;

    modifier notInRecovery {
        require(!inRecovery, "wallet is in recovery mode");
        _;
    }

    modifier onlyInRecovery {
        require(inRecovery, "wallet is not in recovery mode");
        _;
    }

    /// @dev Setups the address which can initiate recovery
    /// @dev Can only be called by the account
    /// @param _newRecoveryAddress recovery address generated while recovery setup
    function setupRecovery(address _newRecoveryAddress) public notInRecovery {
        require(msg.sender == address(this), "Only the account can setup recovery");
        require(_newRecoveryAddress != address(0), "recovery address == address(0)");
        recoveryAddress = _newRecoveryAddress;
    }

    /// @dev This function will take in new q values and start a timelock for 48 hours
    /// @param _newQValues new q values to be used for recovery
    function initiateRecovery(uint256[2] memory _newQValues, bytes32 _message, uint8 _v, bytes32 _r, bytes32 _s) external notInRecovery {
        require(msg.sender == trustedRelayer, "Can only be called via Banana wallet trusted relayer");
        require(_newQValues[0] != 0 && _newQValues[1] != 0, "q values cannot be 0");     
        bytes32 hash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _message));
        address signer = ecrecover(hash, _v, _r, _s);
        require(signer == recoveryAddress, "Invalid signature");   
        nextQValues = _newQValues;
        inRecovery = true;
        unlockTime = block.timestamp + 48 hours;
    }

    /// @dev Stops the recovery process by trusted Banana relayer
    /// @dev Can be called directly from trusted relayer on behalf of user for stopping recovery
    /// @dev In a scenario where recovery is initiated from a bad actor
    function stopRecoveryByRelayer(bytes32 _message, uint8 _v, bytes32 _r, bytes32 _s) external onlyInRecovery {
        require(msg.sender == trustedRelayer, "Caller should be relayer"); 
        bytes32 hash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _message));
        address signer = ecrecover(hash, _v, _r, _s);
        require(signer == recoveryAddress, "Invalid signature"); 
        inRecovery = false;
        nextQValues = [0, 0];
        unlockTime = 0;
    }

    /// @dev Stops the recovery process by owner wallet
    /// @dev Can be called directly by the owner in case owner has access to wallet
    /// @dev In a scenario where recovery is initiated from a bad actor and owner has access to wallet
    function stopRecoveryByOwner() external onlyInRecovery {
        require(msg.sender == address(this), "Caller should be smart contract wallet");
        inRecovery = false;
        nextQValues = [0, 0];
        unlockTime = 0;
    }

    /// @dev Updates the q values to the new q values and finalise recovery
    function finaliseRecovery() external onlyInRecovery {
        // don't need this as gelatoe executor would be the only one calling this
        // should we whitelist gelato executor ?
        // require(msg.sender == trustedRelayer, "Only the trusted relayer can finalise recovery");
        require(block.timestamp >= unlockTime - 600, "Account still in recovery");
        qValues = nextQValues;
        inRecovery = false;
        nextQValues = [0, 0];
        unlockTime = 0;
    }
}