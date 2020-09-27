import React, { useState } from "react";
import "./Sidebar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { Divider, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CallIcon from "@material-ui/icons/Call";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <IconButton aria-label="" onClick={changeOpen}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <nav className={open ? "sidebar active" : "sidebar"}>
        <ul className="nav-list">
          <li className="nav-item">
            <HomeIcon />{" "}
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <InfoIcon />{" "}
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <CallIcon />{" "}
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <Divider light />
          <li className="nav-item">
            <AccountCircleIcon />{" "}
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
