import React from "react";
import "./LiquidBar.css";
import Filler from "./Filler.js";

//
// <div className="container">
//   <div className="progressbar-container">
//     <div className="progressbar-complete">
//       <div className="progressbar-liquid"></div>
//     </div>
//   </div>
// </div>

const LiquidBar = (props) => {
  return (
    <div className="progress_bar">
      <Filler />
    </div>
  );
};

export default LiquidBar;
