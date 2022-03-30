import { coin, fox_face } from "../../utils/emojis";
import "./Navbar.css";

const Navbar = ({ account }) => {
  return (
    <nav class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">
          <a
            href={"https://github.com/fbenfraj"}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-frajswap"
          >
            {coin}FrajSwap
          </a>
        </div>
      </div>

      <div class="nav-links">
        <a
          href={"https://etherscan.io/address/" + account}
          target="_blank"
          rel="noopener noreferrer"
        >
          {(account ? account : "Please connect your Metamask.") + fox_face}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
