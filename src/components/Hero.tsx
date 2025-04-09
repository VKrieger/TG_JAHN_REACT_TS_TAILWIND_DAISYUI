import type { heroDetails } from "../api/types/heroDetails";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions"

import { useEffect, useState } from "react";

interface HeroConfigProps {
  heroConfig: heroDetails;
}



function Hero({ heroConfig }: HeroConfigProps) {
  const {width} = useWindowDimensions();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    if(width < 1024){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  },[width])

  return (

      <div
        className="hero   lg:min-h-200 h-152 w-full bg-blend-darken "
        style={{
          backgroundImage: `url(${heroConfig.backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundColor: `${heroConfig.backgroundColor}`,
        }}
      >
        {heroConfig.backgroundVideo && !isMobile && (
          <video
            autoPlay
            loop
            muted
            className="invisible lg:visible    h-200 w-screen object-cover object-center"
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
                className="font-light duration-300 ease-in-out btn btn-wide rounded-full hover:bg-[#00df9a] hover:drop-shadow-(--drop-shadow-green) tracking-wider  hover:text-white border-none  hover:-translate-y-px  textShadow"
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
