import React from "react";
import "./style.css";

const HeroCard = props => {
  return (
    <div className="card">
      <div className="img-container grow">
        <img alt={props.name} src={props.image} id={props.id} 
        onClick={() => props.shuffleCards(props.id)}/>
      </div>
    </div>
  );
}

export default HeroCard;


