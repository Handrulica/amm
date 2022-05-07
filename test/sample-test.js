const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20 Token", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Token = await ethers.getContractFactory("ERC20");
    const token = await Token.deploy("ERC20", "TKN");
    await token.deployed();

    expect(await token.decimals()).to.equal(18);
  });
});
