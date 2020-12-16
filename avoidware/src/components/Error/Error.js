import React from "react";
import "./Error.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Error() {
  const [{ error }, dispatch] = useStateValue();

  return (
    <div className="error_container">
      <div className="error_title">
        <h1>There was an Error while scanning the given URL</h1>
      </div>
      <div className="error_desc">
        <ArrowDropDownIcon className="arrow_icon" />
        <h1>Error: {JSON.stringify(error.message)}</h1>
        <h1>Error code from the ZAP API: {JSON.stringify(error.code)}</h1>
      </div>
    </div>
  );
}

export default Error;
