import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_fussball.webp";


function Herren() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "Alte Herren",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default Herren