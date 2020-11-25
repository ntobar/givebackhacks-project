import React, { useEffect } from "react";
import "./Results.css";
import Result from "../Result/Result";
import { useHistory, useLocation } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Results() {
  const history = useHistory();
  const location = useLocation();
  //const [{ alertList }, dispatch] = useStateValue();
  const lovs = location.state.lovs;
  const firstAlert = lovs[0];
  //const desc = firstAlert.desc;
  //const alertName = firstAlert.alert;

  useEffect(() => {
    console.log("inside useEffect --> ", location.state.lovs);
  }, [location]);

  return (
    <div className="results">
      <h1> Results for: facebook.com </h1>
      <h1> desc </h1>

      <Result />
      <Result />
      <Result />
      <Result />
    </div>
  );
}

export default Results;
