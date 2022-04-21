import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Post from "../post/post";
import Comment from "../comment/comment";
import { useParams } from "react-router-dom";

const FullPost = (props) => {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);

  let { user_id, post_id } = useParams();
  // console.log(post_id);

  const setState = (state) => {
      setComments(state.comments)
      setPost(state.post)
  }

  useEffect(() => {
    let url = `https://tweeter-test-yin.herokuapp.com/${post_id}/comments`;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: props.token,
      },
    })
      .then(
        (res) => setState(res.data),
        console.log(comments)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="fullPost">
      {post && (
        <Post
          user={post.user}
          caption={post.caption}
          image={post.post_urls[0]}
          comments={post.comments}
          retweets={post.retweets}
          datetime={post.createdAt}
          post_id={post._id}
        />
      )}

      {
          
        comments.map((comment) => (
          <Comment
            user={comment.user}
            caption={comment.caption}
            datetime={comment.createdAt}
          />
        ))}
        {
          comments.length == 0 && <p style={{'display': 'flex', 'justifyContent': 'center'}}>There are no comments yet.</p>
        }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(FullPost);
