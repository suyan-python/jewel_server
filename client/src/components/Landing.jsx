import Hero from "./Hero";
import Hero2 from "./Hero2";
import Charts from "../layouts/Charts";
import CoffeeJourney from "./CoffeeJourney";
import KeyPerson from "./KeyPerson";

function Landing() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <CoffeeJourney />
      <KeyPerson />
      <Charts />
    </div>
  );
}

export default Landing;
