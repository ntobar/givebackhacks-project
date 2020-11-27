import React, { useState } from "react";
import "./Landing.css";
import backgroundImg from "../../img/cool-background.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Landing() {
  const [{ alertList }, dispatch] = useStateValue();

  const history = useHistory();
  const [url, setUrl] = useState("");
  const [alerts, setAlerts] = useState({});
  const [arrayV, setArrayV] = useState({});

  const setList = (item) => {
    dispatch({
      type: "SET_ALERTS",
      item: item,
    });
  };

  const setURL = (item) => {
    dispatch({
      type: "SET_URL",
      item: item,
    });
  };

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

  const sendDataScan = async (data) => {
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
        console.log("------------site find start----------------");
        console.log("---- data.site ---- ", resAlert.data.site);
        console.log(
          "------ @name ------ ",
          resAlert.data.site[url] || resAlert.data.site[url + "/"]
        );
        console.log("------- url ------- ", url);
        console.log("---- sliced url ---", url.slice(0, -1));
        // console.log("--- manual test --- ", resAlert.data.site[]);
        const siteFind = resAlert.data.site.filter(function (item) {
          return item["@name"] === url || item["@name"] === url.slice(0, -1);
        });

        console.log("Site Find --> ", siteFind);
        const lov = siteFind[0].alerts;
        console.log("SITES: -->", resAlert.data.site);
        console.log("alerts --> ", lov);
        //const atap = resAlert.data.site.find(toSearch);
        setArrayV(lov);
        setList(lov);
        //console.log("Array of V --> ", lov);
        //console.log("Current Site Alerts -> ", lov);
        //console.log("EASYA check -->", siteFind);
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

  const sendDataSpider = async (data) => {
    console.log("data is -->", data);

    try {
      const response = await fetch("http://127.0.0.1:3050/scan", {
        method: "post",
        body: JSON.stringify({ uri: data }),
        headers: { "Content-Type": "application/json" },
      });

      // const resAlert = await response.json();
      // window.data = resAlert;
      // setAlerts(resAlert);
      // console.log("resAlert ->>", resAlert);

      // try {
      //   const siteFind = resAlert.data.site.filter(function (item) {
      //     return item["@name"] == url || item["@name"] === url + "/";
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
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

  const sendUrlSpider = (e) => {
    console.log("sendURL being called");
    try {
      sendDataSpider(url);
      setURL(url);
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
  };

  const sendUrlScan = (e) => {
    console.log("sendURL being called");
    try {
      sendDataScan(url);
      setURL(url);
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
            <button onClick={sendUrlSpider}>Test</button>
            <button onClick={sendUrlScan}>Retrieve Scan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
