import { useState } from "react";
import { MdOutlineAccountBalanceWallet, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={open ? "flex-align nav-active" : "flex-align nav-passive"}>
      <div className="nav flex-align space-around">
        <a href="#page-1">
          <h1>
            <span>NFT</span>IER
          </h1>
        </a>

        <div className="nav-links flex-align">
          <a href="#page-1">Trade</a>
          <a href="#page-2">Explore</a>
          <a id="wallet-link" href="#page-3">
            <div id="wallet" className="flex-align gap-4">
              <span>Wallet</span>
              <MdOutlineAccountBalanceWallet className="icon" />
            </div>
          </a>
        </div>

        <div onClick={() => setOpen(!open)} className="hamburger-menu">
          {open ? <MdClose className="icon" /> : <MdMenu className="icon" />}
          <div className={open ? "ham-menu nav-active" : "none nav-passive"}>
            <div className="wrapper">
              <a href="#page-1">Trade</a>
              <a href="#page-2">Explore</a>
              <a href="#page-2">Wallet</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
