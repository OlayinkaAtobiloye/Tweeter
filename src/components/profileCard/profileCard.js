import React from "react";
import ProfileImage from "../../Images/johndoe.jpg"
import "./profileCard.css"


const ProfileCard = props => {
    return(
        <div className="profileCard">
        <img className="profileImage" src={ProfileImage}/>
        <div className="Bio">
          <div className="flexDisplay">
            <p className="userName">Daniel Jensen</p>
            <p className="stats">
              <span className="amount">2569</span> following
            </p>
            <p className="stats">
              <span className="amount">10.8k</span> followers
            </p>
          </div>
          <p className="about">Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>
        </div>
        <button className="followButton">Follow</button>
      </div>
    )
}

export default ProfileCard;