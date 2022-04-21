import React from "react";
import ProfileImage from "../../Images/johndoe.jpg";
import "./comment.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Comment = (props) => {
  return (
    <div className="Comment">
      <img src={props.user.profile_image} className="posterImage"/>
      <div>
      <div>
        <Link to="/user">{props.user.username}</Link>
        <p>24 August at 20:43</p>
        <p>
          {props.caption}
        </p>
      </div>
      <div>
        <a>
          <i className="material-icons-outlined">favorite_border</i>Like
        </a>
        <a>{props.likes} Likes
</a>
      </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    error: state.error,
  };
};


export default Comment;
