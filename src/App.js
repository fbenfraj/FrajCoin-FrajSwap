import React, { useState, useEffect } from "react";
import web3 from "./ethereum/web3";
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

  return (
    <>
      <main>
        <ActionForm
          actionName="BUY"
          actionMethod={buyTokens}
          placeholder="Amount of ETH to sell"
        />
        {/* <ActionForm actionName="SELL" />
        <ActionForm actionName="STAKE" /> */}
      </main>
    </>
  );
}

export default App;
