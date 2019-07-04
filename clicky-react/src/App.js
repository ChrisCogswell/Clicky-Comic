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
    </Wrapper>
  );
}

export default App;
