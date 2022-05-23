import React from "react";
import "./container.css";
import MobileNav from "../mobilenav/mobilenav";

const Container = (props) => {
  return (
    <main className="container">
      {props.children}
      <MobileNav />
    </main>
  );
};

export default Container;
