import { render } from "@testing-library/react";
import Post from "../post/post";
import React from 'react';
import axios from "axios";
import { connect } from "react-redux";


class Feed extends React.Component{
    state = {
        tweets: []
    }
    componentDidMount(){
        let url = "https://tweeter-test-yin.herokuapp.com/feed";
        axios({
            method: "get",
            url: url,
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": this.props.token
            }
          })
          .then(
            res => this.setState(() => {return {tweets: res.data}})
          )
          .catch(
            err => console.log(err)
          )
    }


    render(){
        return(
        <section>
        {
        this.state.tweets.map(
            post => <Post user={post.user} caption={post.caption} image={post.post_urls[0]}
            comments={post.comments} retweets={post.retweets} datetime={post.createdAt}
            post_id={post._id}
            />
        )
        }
        </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      imageURL: state.imageURL,
      username: state.username,
      token: state.token,
    };
  };

export default connect(mapStateToProps, null)(Feed);