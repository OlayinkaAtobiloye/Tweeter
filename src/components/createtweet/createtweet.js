import React, { Component, useState } from "react";
import "./createtweet.css";
import * as actions from "../../store/action";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import axios from "axios";

class CreateTweet extends Component {
  state = {
    showpermission: false,
    tweet: {
      caption: null,
      file: null,
    },
    permission: 1,
    tweetimageURL: null,
    postedTweet: null
    // alert: false
  };

  setPermission = (value) => {
    this.setState({ permission: value });
  };

  componentDidUpdate() {
    if (this.props.postedTweet != null) {
      setTimeout(() => this.setState({postedTweet: null}), 2000);
    }
  }

  postTweet = (event) => {
    event.preventDefault();
    const data = this.state.tweet;
    const stateKeys = Object.keys(data);
    const formData = new FormData();
    console.log("stateKeys: ", stateKeys);
    stateKeys.map((key) => {
      formData.append(key, data[key]);
    });
    let url = "https://tweeter-test-yin.herokuapp.com/posts/create";
    axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": this.props.token
      }
    })
    .then(
      this.setState({postedTweet: true})
    )
    .catch(
      this.setState({postedTweet: false})
    )
  };

  setImage = () => {
    const imageurl = URL.createObjectURL(this.state.tweet.file);
    this.setState(() => {
      return { tweetimageURL: imageurl };
    });
  };

  onImageChange = (event) => {
    this.setState(() => {
      return {
        tweet: {
          ...this.state.tweet,
          file: event.target.files[0],
        },
      };
    }, this.setImage);
  };

  setpermission = () => {
    this.setState({ showpermission: !this.state.showpermission });
  };

  handleNewTweet = (event) => {
    this.setState({ tweet: { caption: event.target.value } });
  };

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    const limit = 100;
    // In case you have a limitation
    e.target.style.height = `${Math.max(e.target.scrollHeight, limit)}px`;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.postedTweet === true ? (
          <p className="tweetSuccess">Tweet posted successfully.</p>
        ) : null}
        {this.state.postedTweet === false ? (
          <p className="tweetSuccess">An error occured.</p>
        ) : null}
        <div className="createTweet">
          <p>Tweet something</p>
          <div className="newtweetInput">
            <img className="posterImage" src={this.props.imageURL} />
            <div className="tweetbox">
              <textarea
                placeholder="What’s happening?"
                className="tweetBox"
                onChange={this.handleNewTweet}
                onKeyDown={this.handleKeyDown}
              />
              <img src={this.state.tweetimageURL} width="100%" />
            </div>
          </div>
          <div className="newtweetIcons">
            <label for="file-input">
              <i className="material-icons-outlined tweetImageIcon">image</i>
            </label>
            <input
              type="file"
              accept="image"
              id="file-input"
              name="image-upload"
              onChange={this.onImageChange}
            />
            <div onClick={this.setpermission}>
              <p>
                <i className="material-icons-outlined">public</i>
                {this.state.permission == 1
                  ? "Everyone can reply"
                  : "Only people you follow can reply"}
              </p>
              {this.state.showpermission ? (
                <div className="replyPermission">
                  <p>Who can reply?</p>
                  <p>Choose who can reply to this Tweet.</p>
                  <div>
                    <a onClick={() => this.setPermission(1)}>
                      <i className="material-icons-outlined">public</i>Everyone
                    </a>
                    <a onClick={() => this.setPermission(0)}>
                      <i className="material-icons-outlined">group</i>People you
                      follow
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
            <button onClick={this.postTweet}>Tweet</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    error: state.error,
    postedTweet: state.postedTweet,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitTweet: (tweet) => dispatch(actions.postTweet(tweet)),
    onResetPostedTweet: () =>
      dispatch({ type: actionTypes.RESET_POSTED_TWEET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTweet);
