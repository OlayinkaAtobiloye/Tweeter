import React, { useState } from "react";
import "./createtweet.css";
import ProfileImage from "../../Images/johndoe.jpg";

const CreateTweet = (props) => {
  const [showpermission, setshowpermission] = useState(false);
  return (
    <div className="createTweet">
      <p>Tweet something</p>
      <div className="newtweetInput">
        <img className="posterImage" src={ProfileImage} />
        <textarea placeholder="What’s happening?" className="tweetBox" />
      </div>
      <div className="newtweetIcons">
        <i className="material-icons-outlined tweetImageIcon">image</i>
        <div onClick={() => setshowpermission(!showpermission)}>
        <p>
          <i className="material-icons-outlined">public</i>Everyone can reply
        </p>
        {showpermission ? (
          <div className="replyPermission">
            <p>Who can reply?</p>
            <p>Choose who can reply to this Tweet.</p>
            <div>
              <a>
                <i className="material-icons-outlined">public</i>Everyone
              </a>
              <a>
                <i className="material-icons-outlined">group</i>People you
                follow
              </a>
            </div>
          </div>
        ) : null}
        </div>
        <button>Tweet</button>
      </div>
    </div>
  );
};

export default CreateTweet;
