import React from "react";
import "./container.css";


const Container = props => {
    return (
        <main className="container">
            {props.children}
        </main>
    )
}

export default Container;