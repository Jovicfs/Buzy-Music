import "./header.css";
import Logo from "../../images/png/logo-no-background.png/";
import Menu from "../Menu/menu.jsx";
import Search from "../Searchbar/search";
export default function Header() {
  return (
    <div className="Header">
      <Menu />
      <Search />
      <img className="logo" src={Logo} alt="Buzy-Logo" />
      <div className="login">
        <button className="login-button" type="button">
          Log In
        </button>
      </div>
    </div>
  );
}
