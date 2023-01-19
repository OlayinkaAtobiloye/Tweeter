import React from "react";

const SortedTweets = (props) => {
  return (
    <div className="linkCard">
      <a className="link">Top</a>
      <a className="link">Latest</a>
      <a className="link">People</a>
      <a className="link">Media</a>
    </div>
  );
};

export default SortedTweets;
