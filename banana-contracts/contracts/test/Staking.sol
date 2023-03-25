pragma solidity ^0.8.12;

contract Staking {

    uint stakedAmount = 0;
    
    function stake() external payable {
        stakedAmount = stakedAmount + msg.value;
    }

    function returnStake() external {
        payable(0x288d1d682311018736B820294D22Ed0DBE372188).transfer(stakedAmount);
    }
}