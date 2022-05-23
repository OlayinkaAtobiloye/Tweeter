import React from "react";
import { Link } from "react-router-dom";
import "./profilebackdrop.css";
import { connect } from "react-redux";

const ProfileDropdown = (props) => {
  return (
    <div className="profileDropdown">
      <React.Fragment>
        <Link className="dropdownLink" to={`/profile/tweets/${props.userId}`}>
          <span className="material-icons-outlined">account_circle</span>
          My Profile
        </Link>
        <a className="dropdownLink">
          <span className="material-icons-outlined">group</span>Group Chat
        </a>
        <Link to="/settings" className="dropdownLink">
          <span className="material-icons-outlined">settings</span>Settings
        </Link>
      </React.Fragment>
      <Link to="/" className="dropdownLink logout" onClick={props.logout}>
        <span className="material-icons-outlined">logout</span>Logout
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "SET_LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
