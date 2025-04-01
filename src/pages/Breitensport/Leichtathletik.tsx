
import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_leichtathletik.webp";


function Leichtathletik() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "Leichtathletik",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default Leichtathletik