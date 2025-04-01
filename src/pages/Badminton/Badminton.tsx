

import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_badminton.webp";


function Badminton() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "Badminton",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default Badminton