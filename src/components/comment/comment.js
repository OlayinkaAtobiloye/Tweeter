import React, { useState } from "react";
import "./comment.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const Comment = (props) => {
  const [liked, setLiked] = useState(props.liked);
  const [likes, setLikes] = useState(props.likes);

  const likeComment = () => {
    setLiked(!liked);
    let url = `hhttps://tweeter-8qqa.onrender.com/comment/${props.id}/like`;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: props.token,
      },
    })
      .then((res) => {
        setLiked(res.data.liked);
        setLikes(res.data.likes);
      })
      .catch((err) => setLiked(!liked));
  };
  let date = new Date(props.date.$date);
  return (
    <div className="Comment">
      <img src={props.user.profile_image} className="posterImage" />
      <div>
        <div>
          <Link to={`/profile/tweets/${props.user._id.$oid}`}>
            {props.user.username}
          </Link>
          <p>
            {date.getDate()} {date.toLocaleString("en", { month: "long" })} at{" "}
            {date.getUTCHours()}:{date.getUTCMinutes()}
          </p>
          <p>{props.caption}</p>
        </div>
        <div>
          <a
            onClick={likeComment}
            style={
              liked
                ? { color: "#EB5757", cursor: "pointer" }
                : { color: "black", cursor: "pointer" }
            }
          >
            <i className="material-icons-outlined">favorite_border</i>
            {liked ? "Liked" : "Like"}
          </a>
          <a>{likes} Likes</a>
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
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(Comment);
