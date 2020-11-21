import React from "react";
import "./Landing.css";
import backgroundImg from "../../img/cool-background.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function Landing() {
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
              placeholder="Copy your URL here"
              className="urlInput"
              type="text"
            />
            <button>Test</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
