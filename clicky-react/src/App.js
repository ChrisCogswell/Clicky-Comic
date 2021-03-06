import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import TitleBox from "./components/TitleBox";
import HeroCard from "./components/HeroCard";
import heroes from "./heroes.json";

class App extends Component {
  state = {
    heroes,
    clickedIds: [],
    score: 0,
    goal: 12,
    outcome: ""
  };

shuffleCards =id=> {
  let clickedIds = this.state.clickedIds;

  if(clickedIds.includes(id)){
    this.setState({ clickedIds: [], score: 0, outcome:  "Game Over! Evil Prevails. Click to play again!" });
    return;
  }else{
    clickedIds.push(id)

  if(clickedIds.length === 12){
    this.setState({score: 12, outcome: "You Won! Heroic Effort", clickedIds: []});
    console.log('You Win');
    return;
  }


  this.setState({ heroes, clickedIds, score: clickedIds.length, outcome: " " });

  for (let i = heroes.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [heroes[i], heroes[j]] = [heroes[j], heroes[i]];
    }
  }
}


  render() {
    return (
      <div>
    <Navbar
            currentScore={this.state.score}
            goal={12}
            message={this.state.outcome}/>
    <TitleBox backgroundImage="http://coolestmaterial.com/wp-content/uploads/2012/01/Comic-Collage-Art-Gallery-Wrap-Canvas.jpg">
        <h1>Clicky-Comic!</h1>
        <h3>Click the pics, but don't click each one more than once</h3>
    </TitleBox>
        <Wrapper>
          {this.state.heroes.map(hero => (
            <HeroCard
              shuffleCards={this.shuffleCards}
              id={hero.id}
              key={hero.id}
              image={hero.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}


export default App;
