import React from "react";
import "./style.css";


function Navbar(props) {
return (

    <nav className="navbar">
    <ul>
        <li className="brand">Clicky-Comic</li>
        <li className="message">{props.message}</li>
        <li className="score">Score: {props.currentScore}</li>
    </ul>
</nav>

    );
}

export default Navbar;