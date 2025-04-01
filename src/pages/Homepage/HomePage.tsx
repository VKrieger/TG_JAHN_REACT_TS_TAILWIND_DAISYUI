import type {heroDetails} from "../../api/types/heroDetails"
import Hero from "../../components/Hero";
import HeroVideo from "../../styles/hero/hero_homepage_video.mp4"
import HeroImg from "../../styles/hero/hero_.homepage.webp";

function HomePage() {


  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    backgroundVideo: HeroVideo,
    heading: "TG Jahn Namedy 1910 e.V.",
    paragraph: "Von Fußball über Bauch Beine Po bis Kinderturnen -für jeden ist etwas dabei.",
    button: "Jetzt Mitglied werden",
    buttonLink: "/mitgliedschaft"
  }

  return (
    <Hero heroConfig={heroConfig}/>
  );
}

export default HomePage;
