import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <>
      <div className="header">
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>

        <img
          src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
          className="header_logo"
          alt="Tinder"
        />

        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </div>
    </>
  );
}

export default Header;
