import React from "react";
import "./Error.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Error() {
  const [{ error, url }, dispatch] = useStateValue();

  return (
    <div className="error_container">
      <div className="error_title">
        <div className="warning_icon">
          <h1>⚠️</h1>
        </div>
        <h1>There was an Error while scanning the following URL:</h1>
        <ArrowDropDownIcon className="arrow_icon" />
        <p>{url}</p>
      </div>
      <div className="error_desc">
        <div className="error_specific">
          <h1>Error:</h1>
          <p> {JSON.stringify(error.message)}</p>
        </div>
        <div className="error_specific">
          <h1>Error code from the ZAP API:</h1>
          <p>{JSON.stringify(error.code)}</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
