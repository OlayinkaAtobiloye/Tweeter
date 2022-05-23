import React from "react";
import "./linksCard.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const LinksCard = (props) => {
  let userId = useParams().user_id;
  if (typeof userId === "undefined") {
    userId = props.userId;
  }

  return (
    <div className="linkCard">
      <NavLink className="link" to={`/profile/tweets/${userId}`}>
        Tweets
      </NavLink>
      <NavLink exact className="link" to={`/profile/retweets/${userId}`}>
        Retweets
      </NavLink>
      <NavLink className="link" to={`/profile/media/${userId}`}>
        Media
      </NavLink>
      <NavLink className="link" to={`/profile/likes/${userId}`}>
        Likes
      </NavLink>
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

export default connect(mapStateToProps, null)(LinksCard);
