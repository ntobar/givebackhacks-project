import React from "react";

import "./ProgressBar.css";

const ProgressBar = (props) => {
  // this.firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
  // // this.firstDayOfYear = 0;
  // // this.firstDayOfNextYear = 100;
  // this.firstDayOfNextYear = new Date(
  //   new Date().getFullYear() + 1,
  //   0,
  //   1
  // ).getTime();

  // const getProgress = () => {
  //   const now = new Date().getTime();
  //   return Math.round(
  //     ((now - this.firstDayOfYear) /
  //       (this.firstDayOfNextYear - this.firstDayOfYear)) *
  //       100
  //   );
  // }

  //style={{ width: `${progress}%` }}

  const progress = props.percentage;
  return (
    <div className="container">
      <div className="progressbar-container">
        <div className="progressbar-complete">
          <div className="progressbar-liquid"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
