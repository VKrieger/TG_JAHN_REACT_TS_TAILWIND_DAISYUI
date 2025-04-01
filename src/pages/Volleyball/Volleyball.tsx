
import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_volleyball.webp";


function Volleyball() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "Volleyball",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default Volleyball