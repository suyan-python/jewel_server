import FarmingHero from "./FarmingHero";
import FarmingHero2 from "./FarmingHero2";
import FarmingHero3 from "./FarmingHero3";
import { SliderData } from "./SliderData";
import FarmingHero4 from "./FarmingHero4";
import FarmingHero5 from "./FarmingHero5";

function LandingFarm() {
  return (
    <div>
      <FarmingHero />
      <FarmingHero2 />
      <FarmingHero3 slides={SliderData} />
      <FarmingHero4 />
      <FarmingHero5 />
    </div>
  );
}

export default LandingFarm;
