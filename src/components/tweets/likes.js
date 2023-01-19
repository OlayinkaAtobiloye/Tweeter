import Post from "../post/post";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner";
import { useParams } from "react-router-dom";

class Likes extends React.Component {
  state = {
    tweets: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    const userId = this.props.params.user_id;
    let url = `https://tweeter-8qqa.onrender.com/user/${userId}/likes`;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: this.props.token,
      },
    })
      .then((res) => {
        this.setState({ tweets: res.data, loading: false });
      })
      .catch((err) => this.setState({ error: true, loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.user_id !== this.props.params.user_id) {
      this.setState({ loading: true });
      const userId = this.props.params.user_id;
      let url = `https://tweeter-8qqa.onrender.com/user/${userId}/likes`;
      axios({
        method: "get",
        url: url,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: this.props.token,
        },
      })
        .then((res) => {
          console.log(res);
          this.setState({ tweets: res.data, loading: false });
        })
        .catch((err) => this.setState({ error: true, loading: false }));
    }
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
        {!this.state.loading &&
          !this.state.error &&
          this.state.tweets.map((tweet) => (
            <Post
              user={tweet.post.user}
              caption={tweet.post.caption}
              image={tweet.post.post_urls[0]}
              comments={tweet.post.comments}
              retweets={tweet.post.retweets}
              datetime={tweet.post.createdAt}
              post_id={tweet.post._id}
              liked={tweet.post.liked}
              likes={tweet.post.likes}
              retweeted={tweet.post.retweeted}
              saved={tweet.post.saved}
            />
          ))}
        {!this.state.loading &&
          !this.state.error &&
          this.state.tweets.length === 0 && (
            <p style={{ display: "flex", justifyContent: "center" }}>
              This user doesn't have any liked post yet.
            </p>
          )}
      </section>
    );
  }
}

const withHooksHOC = (Component) => {
  return (props) => {
    const params = useParams();
    return <Component params={params} {...props} />;
  };
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(withHooksHOC(Likes));
