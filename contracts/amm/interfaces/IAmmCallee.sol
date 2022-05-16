// SPDX-License-Identifier: MIT

pragma solidity >=0.5.12;
interface IAmmCallee {
    function ammCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}