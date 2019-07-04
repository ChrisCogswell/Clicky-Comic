import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import HeroCard from "./components/HeroCard";
import heroes from "./heroes.json";

function App() {
  return (
    <Wrapper>
      <Title>Heroes</Title>
      <HeroCard
        image={heroes[0].image}
      />
      <HeroCard
        image={heroes[1].image}
      />
      <HeroCard
        image={heroes[2].image}
      />
      <HeroCard
        image={heroes[3].image}
      />
      <HeroCard
        image={heroes[4].image}
      />
      <HeroCard
        image={heroes[5].image}
      />
      <HeroCard
        image={heroes[6].image}
      />
      <HeroCard
        image={heroes[7].image}
      />
      <HeroCard
        image={heroes[8].image}
      />
      <HeroCard
        image={heroes[9].image}
      />
      <HeroCard
        image={heroes[10].image}
      />
      <HeroCard
        image={heroes[11].image}
      />
    </Wrapper>
  );
}

export default App;
