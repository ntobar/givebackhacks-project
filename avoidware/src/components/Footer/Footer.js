import React from "react";
import "./Footer.css";
import LogoIcon from "../../img/logoIcon.png";

function Footer() {
  return (
    <div className="main_footer">
      <div className="logo_container">
        <img className="logo" src={LogoIcon} />
        <h4>WebShield</h4>
      </div>
      <div className="terms_policy">
        <p>Terms Of Use</p>
        <p>•</p>
        <p>Privacy Policy</p>
      </div>
      <div className="copyright">
        <p>© 2020 github.com/ntobar</p>
      </div>
    </div>
  );
}

export default Footer;
