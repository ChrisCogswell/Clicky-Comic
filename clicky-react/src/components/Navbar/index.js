import React from "react";
import "./style.css";


function Navbar() {
return (

    <nav className="navbar">
    <ul>
        <li className="brand">Clicky-Comic</li>
        <li className="message">You guessed incorrectly!</li>
        <li className="score">Score: 0 | Top Score: 4</li>
    </ul>
</nav>

    );
}

export default Navbar;