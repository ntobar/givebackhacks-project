import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Link className="icon" to="/">
          <BlurOnIcon />
        </Link>

        <h1>About us</h1>
        <h1>Contact</h1>
      </div>

      <div className="header_right">
        <p>Register</p>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
