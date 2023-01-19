import Post from "../post/post";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner";

class Bookmarks extends React.Component {
  state = {
    tweets: [],
    loading: true,
    error: false,
  };
  componentDidMount() {
    let url = "hhttps://tweeter-8qqa.onrender.com/bookmarks";
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: this.props.token,
      },
    })
      .then((res) =>
        this.setState({ tweets: res.data.bookmarks, loading: false, error: false})
      )
      .catch((err) => this.setState({ error: true, loading: false }));
  }

  render() {
    return (
      <section>
        {this.state.loading && <Spinner />}
        {this.state.error && (
          <p style={{ display: "flex", justifyContent: "center" }}>
            Sorry, an error occured. Please try again.
          </p>
        )}
        {this.state.tweets.map((post, index) => (
          <Post
            user={post.user}
            caption={post.caption}
            image={post.post_urls[0]}
            comments={post.comments}
            retweets={post.retweets}
            datetime={post.createdAt}
            post_id={post._id}
            liked={post.liked}
            likes={post.likes}
            retweeted={post.retweeted}
            saved={post.saved}
            key={index}
          />
        ))}
        {!this.state.loading &&
          !this.state.error &&
          this.state.tweets.length === 0 && (
            <p style={{ display: "flex", justifyContent: "center" }}>
              You don't have any saved post.
            </p>
          )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(Bookmarks);
