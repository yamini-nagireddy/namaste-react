import { useState } from "react";
import applogo from "../images/Fauget.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-container">
      <div className="img-container">
        <img className="app-logo" src={applogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
