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
              shuffleScoreCard={this.shuffleScoreCard}
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

 
// function App() {
//   return (
//     <div>
    // <Navbar/>
    // <TitleBox backgroundImage="http://coolestmaterial.com/wp-content/uploads/2012/01/Comic-Collage-Art-Gallery-Wrap-Canvas.jpg">
    //     <h1>Clicky-Comic!</h1>
    //     <h3>Click the pics, but don't click each one more than once</h3>
    //   </TitleBox>
//     <Wrapper>
//       {/* <Title>Heroes</Title> */}
//       <HeroCard
//         image={heroes[0].image} 
//         />
//       <HeroCard
//         image={heroes[1].image}
//         />
//       <HeroCard
//         image={heroes[2].image}
//         />
//       <HeroCard
//         image={heroes[3].image}
//         />
//       <HeroCard
//         image={heroes[4].image}
//         />
//       <HeroCard
//         image={heroes[5].image}
//         />
//       <HeroCard
//         image={heroes[6].image}
//         />
//       <HeroCard
//         image={heroes[7].image}
//         />
//       <HeroCard
//         image={heroes[8].image}
//         />
//       <HeroCard
//         image={heroes[9].image}
//         />
//       <HeroCard
//         image={heroes[10].image}
//         />
//       <HeroCard
//         image={heroes[11].image}
//         />
//     </Wrapper>
//         </div>
//   );
// }

export default App;
