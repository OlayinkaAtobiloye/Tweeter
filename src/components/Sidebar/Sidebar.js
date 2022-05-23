import React from "react";
import "./sidebar.css";

const SideBar = (props) => {
  return <div className="sideBar">{props.children}</div>;
};

export default SideBar;
