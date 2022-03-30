import React, { useState, useEffect } from "react";
import web3 from "./ethereum/web3";
import frajcoin from "./ethereum/frajcoin";
import frajswap from "./ethereum/frajswap";
import ActionForm from "./components/ActionForm/ActionForm";
import "./App.css";

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
    <main className="main-container">
      <section>
        <h1>Welcome to FrajSwap!</h1>
        <h2 className="main-subtitle">FrajCoin to the moon!</h2>
        <p className="presentation">
          FrajCoin is an ERC-20 token and FrajSwap is a decentralized exchange.
          You can access the source code{" "}
          <a
            href="https://github.com/fbenfraj/FrajCoin-FrajSwap"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
          <br />
          They are both build with Solidity and the contracts are deployed on
          the Rinkeby Network. <br /> You can use the widgets below to buy
          FrajCoins with ETH or sell them to get ETH back.
          <br /> This project is for demonstration purpose only.
        </p>
      </section>
      <section className="action-forms">
        <ActionForm
          actionName="buy"
          actionMethod={buyTokens}
          placeholder="Amount of ETH to sell"
        />
        <ActionForm
          actionName="sell"
          actionMethod={sellTokens}
          placeholder="Amount of FRAJ to sell"
        />
      </section>
    </main>
  );
}

export default App;
