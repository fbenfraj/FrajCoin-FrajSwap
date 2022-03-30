import React, { useState, useEffect } from "react";
import web3 from "./ethereum/web3";
import frajcoin from "./ethereum/frajcoin";
import frajswap from "./ethereum/frajswap";
import "./App.css";
import ActionForm from "./components/ActionForm";

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const fetchedAccounts = await web3.eth.getAccounts();
      setAccounts(fetchedAccounts);
    };

    fetchAccounts();
  }, []);

  const buyTokens = async (e, soldEthAmount) => {
    e.preventDefault();

    await frajswap.methods.buyTokens().send({
      from: accounts[0],
      value: web3.utils.toWei(soldEthAmount, "ether"),
    });
  };

  const sellTokens = async (e, soldFrajAmount) => {
    e.preventDefault();

    const frajswapAddress = frajswap.options.address;
    const realSoldFrajAmount = web3.utils.toWei(soldFrajAmount);

    await frajcoin.methods.approve(frajswapAddress, realSoldFrajAmount).send({
      from: accounts[0],
    });

    await frajswap.methods.sellTokens(realSoldFrajAmount).send({
      from: accounts[0],
    });
  };

  return (
    <>
      <main>
        <ActionForm
          actionName="BUY"
          actionMethod={buyTokens}
          placeholder="Amount of ETH to sell"
        />
        <ActionForm
          actionName="SELL"
          actionMethod={sellTokens}
          placeholder="Amount of FRAJ to sell"
        />
        {/* <ActionForm actionName="STAKE" /> */}
      </main>
    </>
  );
}

export default App;
