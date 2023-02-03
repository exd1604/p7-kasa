/* Footer component
  Data are enclosed in an external file. So if needs to change, do not need to amend the code.
*/
import { footerData } from "../../datas/footerData";
import "../../utils/styles/FooterStyle.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-container-content">
        <img
          className="footer-container-content-logo"
          src={footerData.img}
          alt="Logo Footer"
        />
        <h1 className="footer-container-content-title-1 footer-font">
          {footerData.text}
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
