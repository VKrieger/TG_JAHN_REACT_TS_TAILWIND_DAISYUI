
import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_gymnastik.webp";


function Gymnastik() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "Gymnastik",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default Gymnastik