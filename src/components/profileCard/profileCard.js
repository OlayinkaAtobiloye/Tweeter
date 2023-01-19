import React, { useEffect, useState } from "react";
import "./profileCard.css";
import { connect } from "react-redux";
import axios from "axios";
import {
  useParams
} from "react-router-dom";
import Spinner from "../spinner/spinner";

const ProfileCard = (props) => {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [self, setself] = useState(true);
  const [profile_image, setprofile_image] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const userId = useParams().user_id;
  const [youfollow, setYoufollow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleFollow = () => {
    setFollowers(followers + 1);
    setYoufollow(!youfollow);
    let url = `https://tweeter-8qqa.onrender.com/${userId}/follow`;
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

  useEffect(() => {
    let url = `https://tweeter-8qqa.onrender.com/${userId}/profile`;
    axios
      .get(url, {
        headers: {
          Authorization: props.token,
        },
      })
      .then((response) => {
        setFollowers(response.data.followers);
        setFollowing(response.data.following);
        setself(response.data.self);
        setprofile_image(response.data.profile_image);
        setUsername(response.data.username);
        setBio(response.data.bio);
        setYoufollow(response.data.you_follow);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    let url = `https://tweeter-8qqa.onrender.com/${userId}/profile`;
    axios
      .get(url, {
        headers: {
          Authorization: props.token,
        },
      })
      .then((response) => {
        setFollowers(response.data.followers);
        setFollowing(response.data.following);
        setself(response.data.self);
        setprofile_image(response.data.profile_image);
        setUsername(response.data.username);
        setBio(response.data.bio);
        setYoufollow(response.data.you_follow);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="profileCard">
      {loading && !error && <Spinner />}
      {error && (
        <p style={{ display: "flex", justifyContent: "center" }}>
          Sorry, an error occured. Please try again.
        </p>
      )}
      {!loading && (
        <React.Fragment>
          <img className="profileImage" src={profile_image} />
          <div className="Bio">
            <div className="flexDisplay">
              <p className="userName">{username}</p>
              <p className="stats">
                <span className="amount">{following}</span> following
              </p>
              <p className="stats">
                <span className="amount">{followers}</span> followers
              </p>
            </div>
            <p className="about">{bio}</p>
          </div>
          {!self && (
            <button className="followButton" onClick={handleFollow}>
              {youfollow ? "Following" : "Follow"}
            </button>
          )}
        </React.Fragment>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    bio: state.bio,
    token: state.token,
    userId: state.userId,
  };
};

export default connect(mapStateToProps, null)(ProfileCard);
