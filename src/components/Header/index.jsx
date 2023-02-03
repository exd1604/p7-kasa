import "../../utils/styles/HeaderStyle.css";
import logoHeader from "../../assets/logoHeader.png";
import Navigation from "../Navigation";

function Header() {
  return (
    <header className="header-container">
      <img
        className="header-container-logo"
        src={logoHeader}
        alt="Logo Header"
      />
      <Navigation />
    </header>
  );
}

export default Header;
