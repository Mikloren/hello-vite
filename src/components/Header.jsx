import "./Header.css";
import headerLogo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="TripleTen Logo" />
      <h1 className="header__title">Hello Vite!</h1>
    </div>
  );
}

export default Header;
