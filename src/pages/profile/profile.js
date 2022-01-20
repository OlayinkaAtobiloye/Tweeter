import React, { useState } from "react";
import Auth from "../../components/auth/auth";
import { Link } from "react-router-dom";
import ProfileDropdown from "../../components/profilebackdrop/profilebackdrop";
import TweeterMobile from "../../Images/tweeter-small.svg";
import UserImage from "../../Images/johndoe.jpg";
import Tweeter from "../../Images/tweeter.svg";
import "./profile.css";

const ProfilePage = () => {
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
            <img src={UserImage} className="userImage" />
            <a className="username">John Doe</a>
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
          <Link to="/">Edit</Link>
        </div>
        <div className="profileDiv">
          <p>PHOTO</p>
          <img src={UserImage} className="editProfileImage" />
        </div>
        <div className="profileDiv">
          <p>NAME</p>
          <p>Xanthe Neal</p>
        </div>
        <div className="profileDiv">
          <p>BIO</p>
          <p>I am a software developer and a big fan of devchallenges...</p>
        </div>
        <div className="profileDiv">
          <p>PHONE</p>
          <p>908249274292</p>
        </div>
        <div className="profileDiv">
          <p>EMAIL</p>
          <p>xanthe.neal@gmail.com</p>
        </div>
        <div className="profileDiv">
          <p typeof="password">PASSWORD</p>
          <p>dunno</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
