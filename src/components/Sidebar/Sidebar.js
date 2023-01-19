import React from "react";
import "./Sidebar.css";

const SideBar = (props) => {
  return <div className="sideBar">{props.children}</div>;
};

export default SideBar;
