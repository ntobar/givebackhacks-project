import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main_footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list_unstyled">
              <li>what is this</li>
              <li>moscow russia</li>
              <li>123 mosword csreart</li>
              <li>point pointen</li>
            </ul>
            <div className="column">
              <h4>stuff</h4>
              <li>what is this</li>
              <li>moscow russia</li>
              <li>123 mt</li>
              <li>point </li>
              <ul className="list_unstyled">
                <li>what is this</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-smol">
              &copy;{new Date().getFullYear} copy;[new Date().getFullYear()]
              Thick memes inc |rights reserved | terms of service |privacy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
