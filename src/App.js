import React, { useEffect } from "react";
import web3 from "./ethereum/web3";
import "./App.css";
import ActionForm from "./components/ActionForm";

function App() {
  useEffect(async () => {
    console.log(await web3.eth.getAccounts());
  }, []);

  const buyTokens = (e) => {
    e.preventDefault();
    alert("ok");
  };

  return (
    <>
      <main>
        <ActionForm actionName="BUY" actionMethod={buyTokens} />
        {/* <ActionForm actionName="SELL" />
        <ActionForm actionName="STAKE" /> */}
      </main>
    </>
  );
}

export default App;
