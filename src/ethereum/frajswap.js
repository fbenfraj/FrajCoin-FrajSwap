import web3 from "./web3";
import build from "./abis/FrajSwap.json";

const instance = new web3.eth.Contract(
  build.abi,
  "0x1D71d5E04CFff67C182D1D6d2196B4e961Fb965E"
);

export default instance;
