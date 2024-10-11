import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Charts from "../layouts/Charts";
import CoffeeJourney from "./CoffeeJourney";

function Landing() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <CoffeeJourney />
      <Charts />
    </div>
  );
}

export default Landing;
