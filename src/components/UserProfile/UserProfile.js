import React from "react";
import ProfileImage from "../../Images/johndoe.jpg";
import HeaderImage from "../../Images/traveller.jpg";
import "./UserProfile.css";


const UserProfile = (props) => {
  return (
    <section className="suggestedUserProfile">
      <div>
        <img src={ProfileImage}></img>
        <div>
          <a>Mikael Stanley</a>
          <a>230k followers</a>
        </div>
        <button>Follow</button>
      </div>
      <p>Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>
      <img src={HeaderImage}/>
    </section>
  );
};

export default UserProfile;
