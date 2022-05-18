import React from "react";
import './linksCard.css';
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const LinksCard = (props) => {
    let userId = useParams().user_id;
    return(
    <div className="linkCard">
        <NavLink className="link" to={`/profile/tweets/${userId}`}>Tweets</NavLink>
        <NavLink exact className="link" to={`/profile/tweets/${userId}`}>Tweets & replies</NavLink>
        <NavLink className="link" to={`/profile/media/${userId}`}>Media</NavLink>
        <NavLink className="link" to={`/profile/likes/${userId}`}>Likes</NavLink>
    </div>
    )
}

export default LinksCard;