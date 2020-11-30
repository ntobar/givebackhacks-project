import React, { useEffect } from "react";
import "./Results.css";
import Result from "../Result/Result";
import { useHistory, useLocation } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Results() {
  const [{ alertList, url }, dispatch] = useStateValue();
  const history = useHistory();
  const location = useLocation();
  //const [{ alertList }, dispatch] = useStateValue();
  // const lovs = location.state.lovs;
  // const firstAlert = lovs[0];
  const firstAlert = alertList[0];
  console.log("firstAlert -> ", firstAlert);

  useEffect(() => {
    return () => {
      dispatch({
        type: "CLEAR_ALERTS",
      });
    };
  }, []);

  //const desc = firstAlert.alert;

  //const desc = firstAlert.desc;
  //const alertName = firstAlert.alert;

  // useEffect(() => {
  //   console.log("inside useEffect --> ", location.state.lovs);
  // }, [location]);
  //<h1> {alertList[0]?.alert} </h1>

  return (
    <div className="results">
      <div className="title_2">
        <h1>Results for:</h1>
        <h2 className="url">{url}</h2>
      </div>
      <h1> Alerts: {alertList.length}</h1>

      {alertList?.map((item) => (
        <Result
          alert={item.alert}
          conf={item.confidence}
          risk={item.riskdesc}
          cweid={item.cweid}
          wascid={item.wascid}
          inst={item.count}
          desc={item.desc}
          solution={item.solution}
          refer={item.reference}
        />
      ))}
    </div>
  );
}

export default Results;
