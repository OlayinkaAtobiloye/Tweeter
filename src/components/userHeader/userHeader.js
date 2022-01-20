import React from "react";
import HeaderImage from "../../Images/traveller.jpg";
import "./userHeader.css";
import ProfileCard from "../profileCard/profileCard";


const UserHeader = (props) => {
  return (
    <section className="headerImage">
      {props.children}
    </section>
  );
};

export default UserHeader;
