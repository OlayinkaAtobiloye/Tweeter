import React, { useState } from "react";
import Auth from "../../components/auth/auth";
import { Link } from "react-router-dom";
import ProfileDropdown from "../../components/profilebackdrop/profilebackdrop";
import TweeterMobile from "../../Images/tweeter-small.svg";
import UserImage from "../../Images/johndoe.jpg";
import Tweeter from "../../Images/tweeter.svg";
import "./updateprofile.css";

const UpdateProfilePage = () => {
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
      <div className="profileDetails">
        <div className="profileEditPrompt noborder">
          <div>
            <p>Change Info</p>
            <p>Changes will be reflected to every services</p>
          </div>
        </div>
        <a className="changephoto">
          <img src={UserImage} className="editProfileImage" />
          <i className="material-icons-outlined changephotoIcon">
photo_camera
</i>
          <span>CHANGE PHOTO</span>
        </a>
        <div className="editProfileDiv">
            <label>Name</label>
            <input placeholder="Enter your name..."/>
        </div>
        <div className="editProfileDiv">
            <label>Bio</label>
            <input placeholder="Enter your bio..."/>
        </div>
        <div className="editProfileDiv">
            <label>Phone</label>
            <input placeholder="Enter your phone..."/>
        </div>
        <div className="editProfileDiv">
            <label>Email</label>
            <input placeholder="Enter your email..."/>
        </div>
        <div className="editProfileDiv">
            <label>Password</label>
            <input type="password" placeholder="Enter your new password..."/>
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
