import React, { useEffect, useState } from "react";
import UserProfile from "../UserProfile/UserProfile";
import "./followCard.css";
import axios from "axios";
import { connect } from "react-redux";

const FollowCard = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    let url = `https://tweeter-8qqa.onrender.com/users/suggestions`;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: props.token,
      },
    })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => setError(true));
  }, []);

  return (
    <section className="suggestedUsers">
      <p>Who to follow</p>
      {users.map((user, index) => (
        <UserProfile
          username={user.username}
          bio={user.bio}
          userId={user._id.$oid}
          profile_image={user.profile_image}
          you_follow={user.you_follow}
          followers={user.followers}
          user={user}
          key={index}
        />
      ))}
      {error && (
        <p style={{ display: "flex", justifyContent: "center" }}>
          Sorry, an error occured. Please try again.
        </p>
      )}
    </section>
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

export default connect(mapStateToProps, null)(FollowCard);
