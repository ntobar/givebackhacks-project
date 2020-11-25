import React, { useState } from "react";
import "./Landing.css";
import backgroundImg from "../../img/cool-background.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Landing(props) {
  //const [{ alertList }, dispatch] = useStateValue();

  const history = useHistory();
  const [url, setUrl] = useState("");
  const [alerts, setAlerts] = useState({});
  const [arrayV, setArrayV] = useState({});

  async function postData(urlurl = "", data = {}) {
    // Default options are marked with *
    const response = fetch(urlurl, {
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

  const bodyData = {
    uri: url,
  };

  const sendData = async (data) => {
    console.log("data is -->", data);

    try {
      const response = await fetch("http://127.0.0.1:3050/scan", {
        method: "post",
        body: JSON.stringify({ uri: data }),
        headers: { "Content-Type": "application/json" },
      });

      const resAlert = await response.json();
      window.data = resAlert;
      setAlerts(resAlert);
      console.log("resAlert ->>", resAlert);

      try {
        const lov = resAlert.data.site[0].alerts;
        setArrayV(lov);
        console.log("Array of V --> ", lov);
        console.log("testing Getter -> ", lov[0]);
        console.log("getting desc ", lov[0].alert);
      } catch (error) {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }

    // .then((response) => response.json())
    // .then((json) => {
    //   window
    //   console.log("ALERTSSSS ->>", json)
    // })
    // .then(console.log("resALERTS SET TO --> ", resAlerts));
  };

  const sendUrl = (e) => {
    console.log("sendURL being called");
    try {
      sendData(url);
      //postData("http://localhost:3000/scan", { url: url }).then((data) => {
      //console.log("urlrurrrurlr", data); // JSON data parsed by `data.json()` call
      //});
    } catch (err) {
      console.log("err");
    }

    // dispatch({
    //   type: "SET_ALERTS",
    //   alertList: arrayV,
    // });

    history.push({
      pathname: "/results",
      state: { lovs: arrayV },
    });
  };

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
