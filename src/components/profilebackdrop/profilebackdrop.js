import React from "react";
import "./profilebackdrop.css";

const ProfileDropdown = (props) => {
  return (
    <div className="profileDropdown">
      <React.Fragment>
        <a className="dropdownLink">
          <span className="material-icons-outlined">account_circle</span>
          My Profile
        </a>
        <a className="dropdownLink">
          <span className="material-icons-outlined">group</span>Group Chat
        </a>
        <a className="dropdownLink">
          <span className="material-icons-outlined">settings</span>Settings
        </a>
      </React.Fragment>
      <a className="dropdownLink logout">
        <span className="material-icons-outlined">logout</span>Logout
      </a>
    </div>
  );
};

export default ProfileDropdown;
