import web3 from "./web3";
import build from "./abis/FrajCoin.json";

const instance = new web3.eth.Contract(
  build.abi,
  "0xA9f6f775212734b3Ff6B2FF95239c4E605C1a4D9"
);

export default instance;
