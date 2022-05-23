import React from "react";
import "./searchbox.css";

const SearchBox = () => {
  return (
    <form className="searchbox">
      <span className="material-icons-outlined searchIcon">search</span>
      <input type="search" placeholder="Search" className="searchBox" />
      <button className="searchButton">Search</button>
    </form>
  );
};

export default SearchBox;
