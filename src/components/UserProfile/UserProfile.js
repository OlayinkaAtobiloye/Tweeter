import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = (props) => {
  const [youfollow, setYoufollow] = useState(props.you_follow);
  const [followers, setFollowers] = useState(props.followers);

  const handleFollow = () => {
    setFollowers(followers + 1);
    setYoufollow(!youfollow);
    let url = `https://tweeter-8qqa.onrender.com/${props.user._id.$oid}/follow`;
    axios
      .get(url, {
        headers: {
          Authorization: props.token,
        },
      })
      .then((response) => {
        setFollowers(response.data.followers);
        setYoufollow(response.data.following);
      })
      .catch((error) => {
        setFollowers(followers - 1);
        setYoufollow(!youfollow);
      });
  };

  return (
    <section className="suggestedUserProfile">
      <div>
        <img src={props.profile_image}></img>
        <div>
          <Link to={`/profile/tweets/${props.userId}`}>{props.username}</Link>
          <a>{followers} followers</a>
        </div>
        <button onClick={handleFollow}>
          {youfollow ? "Following" : "Follow"}
        </button>
      </div>
      <p>{props.bio}</p>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
