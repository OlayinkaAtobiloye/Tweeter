import React from "react";
import "./userHeader.css";

const UserHeader = (props) => {
  return <section className="headerImage">{props.children}</section>;
};

export default UserHeader;
