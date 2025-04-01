import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_ueber_uns.webp";


function Ueber_uns() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    heading: "Die Geschichte der TG Jahn Namedy",
  }

  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default Ueber_uns