import React from "react";
import ProfileImage from "../../Images/johndoe.jpg";
import "./comment.css";
import { Link } from "react-router-dom";

const Comment = (props) => {
  return (
    <div className="Comment">
      <img src={ProfileImage} className="posterImage"/>
      <div>
      <div>
        <Link to="/user">Waqar Bloom</Link>
        <p>24 August at 20:43</p>
        <p>
          I’ve seen awe-inspiring things that I thought I’d never be able to
          explain to another person.
        </p>
      </div>
      <div>
        <a>
          <i className="material-icons-outlined">favorite_border</i>Like
        </a>
        <a>12k Likes
</a>
      </div>
    </div>
    </div>
  );
};


export default Comment;
