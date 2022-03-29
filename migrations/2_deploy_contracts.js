const FrajCoin = artifacts.require("FrajCoin");
const FrajSwap = artifacts.require("FrajSwap");

module.exports = function (deployer) {
  deployer.deploy(FrajCoin);
  deployer.deploy(FrajSwap, FrajCoin.address);
};
