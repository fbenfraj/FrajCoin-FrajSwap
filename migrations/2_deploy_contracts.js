const FrajCoin = artifacts.require("FrajCoin");
const FrajSwap = artifacts.require("FrajSwap");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(FrajCoin);
    await deployer.deploy(FrajSwap, FrajCoin.address);
  });
};
