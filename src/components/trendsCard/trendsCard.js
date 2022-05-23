import React from "react";
import "./trendsCard.css";

const TrendsCard = (props) => {
  return (
    <section className="trendsCard">
      <p>Trends for you</p>
      <div className="hashtag">
        <a>#programming</a>
        <p>213k Tweets</p>
      </div>
      <div className="hashtag">
        <a>#learntocode</a>
        <p>34k Tweets</p>
      </div>
      <div className="hashtag">
        <a>#100daysofCode</a>
        <p>1.8k Tweets</p>
      </div>
    </section>
  );
};

export default TrendsCard;
