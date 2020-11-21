import React, { useState } from "react";
import "./Landing.css";
import backgroundImg from "../../img/cool-background.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();
  const [url, setUrl] = useState("");

  const sendUrl = (e) => {
    history.push("/results");
  };

  async function postData(urlurl = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(urlurl, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    const dataref = await response.json();
    return dataref; // parses JSON response into native JavaScript objects
  }

  postData("https://react-tobar-chat.herokuapp.com/", { url: url }).then(
    (data) => {
      console.log("urlrurrrurlr", data); // JSON data parsed by `data.json()` call
    }
  );

  return (
    <div className="home">
      <div className="home_container">
        <div className="title_container">
          <h1 className="heading">Clear URL</h1>
          <p className="info">
            An automated malware scan tool for any web page
          </p>
          <div className="url_textField">
            <input
              placeholder="Paste your URL here"
              className="urlInput"
              type="text"
              onChange={(event) => setUrl(event.target.value)}
            />
            <button onClick={sendUrl}>Test</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
