import React from "react";
import UserProfile from "../UserProfile/UserProfile";
import './followCard.css'


const FollowCard = props => {
    return(
    <section className="suggestedUsers">
        <p>Who to follow</p>
        <UserProfile/>
        <UserProfile/>
    </section>
    )
}

export default FollowCard;