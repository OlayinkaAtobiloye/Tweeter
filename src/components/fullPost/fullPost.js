import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Post from "../post/post";
import Comment from "../comment/comment";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";

const FullPost = (props) => {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [commentSent, setCommentsent] = useState(null);
  let { user_id, post_id } = useParams();

  useEffect(() => {
    setLoading(true);
    let url = `https://tweeter-8qqa.onrender.com/${post_id}/comments`;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: props.token,
      },
    })
      .then((res) => {
        setComments(res.data.comments);
        setPost(res.data.post);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    let url = `https://tweeter-test-yin.herokuapp.com/${post_id}/comments`;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: props.token,
      },
    })
      .then((res) => {
        setComments(res.data.comments);
        setPost(res.data.post);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [props.commentSent]);

  return (
    <div className="fullPost">
      {loading && <Spinner />}
      {error && (
        <p style={{ display: "flex", justifyContent: "center" }}>
          Sorry, an error occured. Please try again.
        </p>
      )}
      {!loading && post && (
        <Post
          user={post.user}
          caption={post.caption}
          image={post.post_urls[0]}
          comments={post.comments}
          retweets={post.retweets}
          datetime={post.createdAt}
          post_id={post._id}
          saves={post.bookmarks}
          retweeted={post.retweeted}
          liked={post.liked}
          likes={post.likes}
        />
      )}

      {comments.map((comment, index) => (
        <Comment
          id={comment._id.$oid}
          user={comment.user}
          caption={comment.caption}
          datetime={comment.createdAt}
          likes={comment.likes}
          liked={comment.liked}
          date={comment.createdAt}
          key={index}
        />
      ))}
      {!loading && !error && comments.length === 0 && (
        <p style={{ display: "flex", justifyContent: "center" }}>
          There are no comments yet.
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    token: state.token,
    commentSent: state.commentSent,
  };
};

export default connect(mapStateToProps, null)(FullPost);
