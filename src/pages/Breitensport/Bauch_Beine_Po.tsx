
import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_bauch_beine_po.webp";


function Bauch_Beine_Po() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "Bauch Beine Po",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default Bauch_Beine_Po