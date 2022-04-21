import React from "react";
import './linksCard.css';

const LinksCard = (props) => {
    return(
    <div className="linkCard">
        <a className="link">Tweets</a>
        <a className="link">Tweets & replies</a>
        <a className="link">Media</a>
        <a className="link">Likes</a>
    </div>
    )
}

export default LinksCard;