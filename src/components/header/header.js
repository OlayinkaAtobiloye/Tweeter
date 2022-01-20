import React, { useState } from "react";
import "./header.css";
import Tweeter from "../../Images/tweeter.svg";
import TweeterMobile from "../../Images/tweeter-small.svg";
import UserImage from "../../Images/johndoe.jpg";
import ProfileDropdown from "../profilebackdrop/profilebackdrop";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const [showDropdown, setshowDropdown] = useState(false)


  return (
    <header className="header">
      <Link to="/" className="homePage">
        <img src={Tweeter} className="tweeter" />
        <img src={TweeterMobile} className="tweeterMobile" />
        {/* <h1 className="appName">Tweeter</h1> */}
      </Link>
      <nav className="navBar">
        <NavLink className="navLink" to='/'>Home</NavLink>
        <NavLink className="navLink" to="/explore">Explore</NavLink>
        <NavLink className="navLink" to="/bookmarks">Bookmarks</NavLink>
      </nav>
      <div className="userProfile">
        <a className="userSummary" onClick={() => setshowDropdown(!showDropdown)}>
          <img src={UserImage} className="userImage" />
          <a className="username">John Doe</a>
        </a>
        {
          showDropdown ?
          <ProfileDropdown/>
          :
          null
        }
      </div>
    </header>
  );
};

export default Header;
