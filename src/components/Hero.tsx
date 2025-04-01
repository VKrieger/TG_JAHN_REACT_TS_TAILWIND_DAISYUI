import type { heroDetails } from "../api/types/heroDetails";
import { Link } from "react-router-dom";

interface HeroConfigProps {
  heroConfig: heroDetails;
}

function Hero({ heroConfig }: HeroConfigProps) {
  return (
    <div
      className="  mt-18 hero min-h-176 min-w-screen bg-blend-darken "
      style={{
        backgroundImage: `url(${heroConfig.backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
        backgroundColor: `${heroConfig.backgroundColor}`,
      }}
    >
      {heroConfig.backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          className="invisible lg:visible  absolute -mt-3 h-full w-full object-cover"
        >
          <source src={heroConfig.backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="hero-content text-neutral-content text-center ">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold textShadow">
            {heroConfig.heading}
          </h1>
          {heroConfig.paragraph && (
            <p className="mb-5 textShadow">{heroConfig.paragraph}</p>
          )}
          {heroConfig.button && (
            <Link
              to={heroConfig.buttonLink ?? "/"}
              className="font-light duration-300 ease-in-out btn btn-wide rounded-full hover:bg-(--color-glow-green) hover:drop-shadow-(--drop-shadow-green) tracking-wider  hover:text-white border-none  hover:-translate-y-px  textShadow"
//  
            >
              {heroConfig.button}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
