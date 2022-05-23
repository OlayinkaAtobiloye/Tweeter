import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./bio.css";

const Bio = (props) => {
  return (
    <div className="bioComponent">
      <img src={props.imageURL} />
      <p>{props.username}</p>
      <p>{props.bio}</p>
      <Link to={`/profile/tweets/${props.userId}`}>View full profile</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    bio: state.bio,
    userId: state.userId,
  };
};

export default connect(mapStateToProps, null)(Bio);
