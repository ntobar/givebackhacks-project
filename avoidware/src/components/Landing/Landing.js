import React, { useState } from "react";
import "./Landing.css";
import backgroundImg from "../../img/cool-background.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Spinner from "../Spinner/Spinner";

function Landing() {
  const [{ alertList }, dispatch] = useStateValue();

  const history = useHistory();
  const [url, setUrl] = useState("");
  const [alerts, setAlerts] = useState({});
  const [arrayV, setArrayV] = useState({});
  const [loading, setLoading] = useState("none");
  const [disabled, setDisabled] = useState(true);
  const [display, setDisplay] = useState(null);
  const [retrieve, setRetrieve] = useState(false);

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
    setLoading("flex");

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

  const retrieveSetup = () => {
    setLoading("none");
    setRetrieve(true);
  };

  const sendUrlSpider = (e) => {
    setDisplay("none");
    // setTimeout(setDisplay("flex"), 3000);
    setLoading("true");
    setTimeout(retrieveSetup, 3000);

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

  const sendUrlScan = async (e) => {
    console.log("sendURL being called");
    try {
      await sendDataScan(url);
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
      // state: { lovs: arrayV },
    });
  };

  if (loading === "none" && retrieve === false) {
    return (
      <div className="home">
        <div className="home_container">
          <div style={{ display: display }} className="title_container">
            <h1 className="heading">Clear URL</h1>
            <p className="info">
              An automated malware scan tool for any web page
            </p>
            <div className="url_textField">
              <input
                placeholder="Paste your URL here"
                className="urlInput"
                type="text"
                onChange={(event) => {
                  setUrl(event.target.value);
                  setDisabled(false);
                }}
              />
              <button disabled={disabled} onClick={sendUrlSpider}>
                Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //For loading spinner
  if (loading === "flex" && retrieve === false) {
    return (
      <div className="home_spinner">
        <div className="home_container">
          <div className="spinner">
            <h1 className="heading_spinner"> Scanning Webpage ... </h1>
            <div style={{ display: loading }}>
              <Spinner />
            </div>
          </div>
        </div>
      </div>
    );
  }

  //After spinner, only retrieve data button shows
  if (loading === "none" && retrieve === true) {
    return (
      <div className="home">
        <div className="home_container">
          <div className="title_container">
            <h1 className="info">Click to retrieve your data</h1>
            <button onClick={sendUrlScan}>See Results</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
