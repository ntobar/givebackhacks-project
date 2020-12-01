import React, { useState } from "react";
import "./Result.css";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ReactCardFlip from "react-card-flip";
import ScrollToBottom from "react-scroll-to-bottom";

function Result({
  alert,
  conf,
  risk,
  cweid,
  wascid,
  inst,
  desc,
  solution,
  refer,
}) {
  document.body.style = "background:#2f4454 ";

  return (
    // <div class="flip-card">
    //   <div class="flip-card-inner">
    //     <div class="flip-card-front">
    //       <div className="title">
    //         <OfflineBoltIcon className="icon" />
    //         <h1>{alert}</h1>
    //       </div>
    //
    //       <div className="ratings">
    //         <p className="result_rating">
    //           <strong>• Confidence: {conf}</strong>
    //           <strong>• Risk: {risk}</strong>
    //           <strong>• CWE id: {cweid}</strong>
    //           <strong>• WASC id: {wascid}</strong>
    //           <strong>• Instances: {inst}</strong>
    //         </p>
    //
    //         <h3>Description</h3>
    //         <p>{desc}</p>
    //         <h2> Hover for Solution </h2>
    //       </div>
    //     </div>
    //     <div class="flip-card-back">
    //       <h1>John Doe</h1>
    //       <p>Architect & Engineer</p>
    //       <p>We love that guy</p>
    //     </div>
    //   </div>
    // </div>
    <div className="result">
      <div className="card">
        <div className="v_desc">
          <div className="title">
            <OfflineBoltIcon className="icon" />
            <h1>{alert}</h1>
          </div>

          <div className="ratings">
            <div className="listings">
              <p className="result_rating">
                <strong>• Confidence: {conf}</strong>
                <strong>• Risk: {risk}</strong>
                <strong>• CWE id: {cweid}</strong>
                <strong>• WASC id: {wascid}</strong>
                <strong>• Instances: {inst}</strong>
              </p>
            </div>
            <h3>Description</h3>
            <div dangerouslySetInnerHTML={{ __html: desc }}></div>
          </div>
        </div>

        <div className="v_sol">
          <h3>Solution</h3>
          <div dangerouslySetInnerHTML={{ __html: solution }}></div>
        </div>
      </div>
    </div>
  );
}

export default Result;
