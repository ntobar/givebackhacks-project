import React from "react";
import "./About.css";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import Looks3Icon from "@material-ui/icons/Looks3";

import Cyborg1 from "../../img/cyborg1.png";
import Cyborg2 from "../../img/cyborg2.png";
import Cyborg3 from "../../img/cyborg3.png";

function About() {
  return (
    <div className="container_A">
      <div className="web_shield_desc">
        <div className="sections">
          <img className="icons" src={Cyborg1} />
          <div className="first_step">
            <LooksOneIcon className="icon" />
            <h3>
              Paste the Webpage URL, WebShield then communicates with the ZAP
              API which will scan the URL.
            </h3>
          </div>
        </div>
        <div className="sections">
          <img className="icons" src={Cyborg2} />
          <div className="first_step">
            <LooksTwoIcon className="icon" />
            <h3>
              The ZAP API uses an Active Scanner to scan the website for
              potential security vulnerabilities, and sends the results back.
            </h3>
          </div>
        </div>
        <div className="sections">
          <img className="icons" src={Cyborg3} />
          <div className="first_step">
            <Looks3Icon className="icon" />
            <h3>
              Webshield then breaks down all the vulnerabilities and their
              fixes, and displays them for you!
            </h3>
          </div>
        </div>
      </div>

      <h1 className="what_is">How It Works?</h1>

      <div className="web_shield_desc">
        <p>
          <p>
            WebShield is an automated Web Application that scans security
            vulnerabilities in any website.
          </p>
          We use the OWASP Zed Attack Proxy (ZAP) API to be able to scan a web
          site for potential vulnerabilities.
        </p>
      </div>
    </div>
  );
}

export default About;
