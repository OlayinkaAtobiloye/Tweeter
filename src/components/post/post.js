import React from "react";
import "./post.css";
import UserImage from "../../Images/johndoe.jpg";
import PostImage from "../../Images/reading.jpg";
import Comment from "../comment/comment";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <article className="post">
      <header className="postingDetails">
        <img className="posterImage" src={UserImage} />
        <div>
          <Link to="/user" className="posterName">Peyton Lyons</Link>
          <p className="postingDate">24 August at 20:43</p>
        </div>
      </header>
      <p className="tweet">
        Traveling - it leaves you speechless, then turns you into a storyteller.
      </p>
      <img className="postImage" src={PostImage} />
      <div className="engagementLinks">
        <a className="engagementLink">449 Comments</a>
        <a className="engagementLink">59k Retweets</a>
        <a className="engagementLink">234 Saved</a>
      </div>
      <div className="engageLinks">
        <a className="engageLink">
          <span className="material-icons-outlined engageLink">mode_comment</span>Comment
        </a>
        <a className="engageLink">
          <span className="material-icons-outlined engageLink">autorenew</span>
          Retweet
        </a>
        <a className="engageLink">
          <span className="material-icons-outlined engageLink">favorite_border</span>Like
        </a>
        <a className="engageLink">
          <span className="material-icons-outlined engageLink">bookmark_border</span>Save
        </a>
      </div>
      <div className="commentCard">
          <img src={UserImage} className="posterImage"/>
          <input className="inputComment" placeholder="Tweet your reply"/>
          <i className="material-icons-outlined commentImageIcon">
image
</i>
      </div>
      <Comment/>
    </article>
  );
};

export default Post;
