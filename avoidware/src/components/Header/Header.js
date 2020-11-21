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
      <Link className="icon" to="/">
        <BlurOnIcon />
      </Link>

      <div className="sections_header"></div>

      <div className="header_right">
        <p>Share your Wasi</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
