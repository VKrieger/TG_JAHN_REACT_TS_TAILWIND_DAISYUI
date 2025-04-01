import type { heroDetails } from "../../api/types/heroDetails";
import Hero from "../../components/Hero";

import HeroImg from "../../styles/hero/hero_fussball.webp";

function E_Jugend() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    heading: "E-Jugend",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  return <Hero heroConfig={heroConfig} />;
}

export default E_Jugend;
