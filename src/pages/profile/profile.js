import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "../../components/profilebackdrop/profilebackdrop";
import Tweeter from "../../Images/tweeter.svg";
import "./profile.css";
import { connect } from "react-redux";

const ProfilePage = (props) => {
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <div className="editProfile">
      <header className="profileHeader">
        <Link to="/">
          <img src={Tweeter} />
        </Link>
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
      <p>Personal info</p>
      <p>Basic info, like your name and photo</p>
      <div className="profileDetails">
        <div className="profileEditPrompt">
          <div>
            <p>Profile</p>
            <p>Some info may be visible to other people</p>
          </div>
          <Link to="/updateprofile">Edit</Link>
        </div>
        <div className="profileDiv">
          <p>PHOTO</p>
          <img src={props.imageURL} className="editProfileImage" />
        </div>
        <div className="profileDiv">
          <p>NAME</p>
          <p>{props.username}</p>
        </div>
        <div className="profileDiv">
          <p>BIO</p>
          <p>{props.bio}</p>
        </div>
        <div className="profileDiv">
          <p>PHONE</p>
          <p>{props.phone}</p>
        </div>
        <div className="profileDiv">
          <p>EMAIL</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    bio: state.bio,
    username: state.username,
    email: state.email,
    error: state.error,
    message: state.message,
    phone: state.phone,
  };
};

export default connect(mapStateToProps, null)(ProfilePage);
