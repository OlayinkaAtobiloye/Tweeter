import React, { useState } from "react";
import "./header.css";
import Tweeter from "../../Images/tweeter.svg";
import TweeterMobile from "../../Images/tweeter-small.svg";
import ProfileDropdown from "../profilebackdrop/profilebackdrop";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="homePage">
        <img src={Tweeter} className="tweeter" />
        <img src={TweeterMobile} className="tweeterMobile" />
      </Link>
      <nav className="navBar">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/explore">
          Explore
        </NavLink>
        <NavLink className="navLink" to="/bookmarks">
          Bookmarks
        </NavLink>
      </nav>
      <div className="userProfile">
        <a
          className="userSummary"
          onClick={() => setshowDropdown(!showDropdown)}
        >
          <img src={props.imageURL} className="userImage" />
          <a className="username">{props.username}</a>
        </a>
        {showDropdown ? <ProfileDropdown /> : null}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    error: state.error,
  };
};

export default connect(mapStateToProps, null)(Header);
