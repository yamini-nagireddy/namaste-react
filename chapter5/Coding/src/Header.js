import applogo from "../images/Fauget.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
