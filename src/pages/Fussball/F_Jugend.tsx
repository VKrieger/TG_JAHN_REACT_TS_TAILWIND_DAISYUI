import type { heroDetails } from "../../api/types/heroDetails";
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_fussball.webp";

function F_Jugend() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "F-Jugend",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  return <Hero heroConfig={heroConfig} />;
}

export default F_Jugend;
