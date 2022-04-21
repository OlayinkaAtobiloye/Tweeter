import React, {useState} from "react";
import "./post.css";
import Comment from "../comment/comment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";


const Post = (props) => {
  let date = new Date(props.datetime.$date)
  console.log(date)

  const [liked, setLiked] = useState(props.liked)
  const [retweeted, setRetweeted] = useState(props.retweeted)
  const [saved, setSaved] = useState(props.saved)

  const likePost = () => {
    setLiked(!liked)
    console.log(props.post_id.$oid)
    let url = `https://tweeter-test-yin.herokuapp.com/${props.post_id.$oid}/like`;
        axios({
            method: "get",
            url: url,
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": props.token
            }
          })
          .then(
            res => setLiked(res.data.liked)
          )
          .catch(
            err => console.log(err)
          )
  }

  const bookmarkPost = () => {
    setSaved(!saved)
    let url = `https://tweeter-test-yin.herokuapp.com/${props.post_id.$oid}/bookmark`;
        axios({
            method: "get",
            url: url,
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": props.token
            }
          })
          .then(
            res => setLiked(res.data.saved)
          )
          .catch(
            err => console.log(err)
          )
  }

  
  return (
    <article className="post">
      <header className="postingDetails">
        <img className="posterImage" src={props.user.profile_image} />
        <div>
          <Link to={`/profile/${props.user._id.$oid}`} className="posterName">{props.user.username}</Link>
          <p className="postingDate">{date.getDate()} {date.toLocaleString('en', {month: 'long'})} at {date.getUTCHours()}:{date.getUTCMinutes()}</p>
        </div>
      </header>
      <Link className="tweet" to={`/${props.username}/${props.post_id.$oid}`}>
        {props.caption}
      </Link>
      <img className="postImage" src={props.image} />
      <div className="engagementLinks">
        <Link to={`/${props.username}/${props.postid}/comments`} className="engagementLink" >{props.comments} Comments</Link>
        <a className="engagementLink">{props.retweets} Retweets</a>
        <a className="engagementLink">{props.saved} Saved</a>
      </div>
      <div className="engageLinks">
        <a className="engageLink">
          <span className="material-icons-outlined engageLink">mode_comment</span>
          <span>Comment</span>
        </a>
        <a className="engageLink" style={retweeted && {'color': '#27AE60'}}>
          <span className="material-icons-outlined engageLink">autorenew</span>
          <span>{retweeted ? "Retweeted" : "Retweet"}</span>
        </a>
        <a className="engageLink" style={liked ? {'color': '#EB5757'} : {'color': 'black'}} onClick={likePost}>
          <span className="material-icons-outlined engageLink">favorite_border</span>
          <span>{liked ? "Liked" : "Like"}</span>
        </a>
        <a className="engageLink" style={saved ? {'color': '#2D9CDB'} : {'color': 'inherit'}} onClick={bookmarkPost}>
          <span className="material-icons-outlined engageLink">bookmark_border</span>
          <span>{saved ? "Saved" : "Save"}</span>
        </a>
      </div>
      <div className="commentCard">
          <img src={props.imageURL} className="posterImage"/>
          <input className="inputComment" placeholder="Tweet your reply"/>
          <i className="material-icons-outlined commentImageIcon">
image
</i>
      </div>
      {/* <Comment/> */}
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    error: state.error,
    token: state.token
  };
};

export default connect(mapStateToProps, null)(Post);
