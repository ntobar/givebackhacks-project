import React, { useState } from "react";
import "./Result.css";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ReactCardFlip from "react-card-flip";

function Result({ alert, conf, risk, cweid, wascid, inst, desc, solution }) {
  document.body.style = "background:#2f4454 ";

  return (
    <div className="result">
      <div className="v_desc">
        <div className="title">
          <OfflineBoltIcon className="icon" />
          <h1>{alert}</h1>
        </div>

        <div className="ratings">
          <p className="result_rating">
            <strong>• Confidence: {conf}</strong>
            <strong>• Risk: {risk}</strong>
            <strong>• CWE id: {cweid}</strong>
            <strong>• WASC id: {wascid}</strong>
            <strong>• Instances: {inst}</strong>
          </p>

          <h3>Description</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className="v_sol">
        <h3>Solution</h3>
        <p>{solution}</p>
      </div>
    </div>
  );
}

export default Result;
