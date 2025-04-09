import type { heroDetails } from "../../api/types/heroDetails";
import Hero from "../../components/Hero";
import HeroVideo from "../../styles/hero/hero_homepage_video.mp4";
import HeroImg from "../../styles/hero/hero_homepage.webp";

function HomePage() {
  const heroConfig: heroDetails = {
    backgroundImage: HeroImg,
    backgroundVideo: HeroVideo,
    heading: "TG Jahn Namedy 1910 e.V.",
    paragraph:
      "Von Fußball über Bauch Beine Po bis Kinderturnen -für jeden ist etwas dabei.",
    button: "Jetzt Mitglied werden",
    buttonLink: "/mitgliedschaft",
  };

  return (
    <div>
      <Hero heroConfig={heroConfig} />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          nisl vel turpis commodo pellentesque. Cras dignissim dolor malesuada
          eros faucibus molestie. Sed faucibus justo nec ante suscipit, nec
          interdum nulla commodo. Sed rhoncus dictum felis, sit amet semper
          nisi. Fusce aliquet efficitur laoreet. Morbi tempus efficitur urna
          bibendum tincidunt. Sed vestibulum mollis mattis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nunc faucibus dictum
          gravida. Vivamus et sem eu risus scelerisque imperdiet. Aliquam eget
          odio vitae nisi aliquam interdum. Etiam molestie dui at urna vehicula,
          et fringilla leo tempor. Sed rhoncus ullamcorper libero, a faucibus
          eros pulvinar ac.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          nisl vel turpis commodo pellentesque. Cras dignissim dolor malesuada
          eros faucibus molestie. Sed faucibus justo nec ante suscipit, nec
          interdum nulla commodo. Sed rhoncus dictum felis, sit amet semper
          nisi. Fusce aliquet efficitur laoreet. Morbi tempus efficitur urna
          bibendum tincidunt. Sed vestibulum mollis mattis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nunc faucibus dictum
          gravida. Vivamus et sem eu risus scelerisque imperdiet. Aliquam eget
          odio vitae nisi aliquam interdum. Etiam molestie dui at urna vehicula,
          et fringilla leo tempor. Sed rhoncus ullamcorper libero, a faucibus
          eros pulvinar ac.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          nisl vel turpis commodo pellentesque. Cras dignissim dolor malesuada
          eros faucibus molestie. Sed faucibus justo nec ante suscipit, nec
          interdum nulla commodo. Sed rhoncus dictum felis, sit amet semper
          nisi. Fusce aliquet efficitur laoreet. Morbi tempus efficitur urna
          bibendum tincidunt. Sed vestibulum mollis mattis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nunc faucibus dictum
          gravida. Vivamus et sem eu risus scelerisque imperdiet. Aliquam eget
          odio vitae nisi aliquam interdum. Etiam molestie dui at urna vehicula,
          et fringilla leo tempor. Sed rhoncus ullamcorper libero, a faucibus
          eros pulvinar ac.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          nisl vel turpis commodo pellentesque. Cras dignissim dolor malesuada
          eros faucibus molestie. Sed faucibus justo nec ante suscipit, nec
          interdum nulla commodo. Sed rhoncus dictum felis, sit amet semper
          nisi. Fusce aliquet efficitur laoreet. Morbi tempus efficitur urna
          bibendum tincidunt. Sed vestibulum mollis mattis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nunc faucibus dictum
          gravida. Vivamus et sem eu risus scelerisque imperdiet. Aliquam eget
          odio vitae nisi aliquam interdum. Etiam molestie dui at urna vehicula,
          et fringilla leo tempor. Sed rhoncus ullamcorper libero, a faucibus
          eros pulvinar ac.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          nisl vel turpis commodo pellentesque. Cras dignissim dolor malesuada
          eros faucibus molestie. Sed faucibus justo nec ante suscipit, nec
          interdum nulla commodo. Sed rhoncus dictum felis, sit amet semper
          nisi. Fusce aliquet efficitur laoreet. Morbi tempus efficitur urna
          bibendum tincidunt. Sed vestibulum mollis mattis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nunc faucibus dictum
          gravida. Vivamus et sem eu risus scelerisque imperdiet. Aliquam eget
          odio vitae nisi aliquam interdum. Etiam molestie dui at urna vehicula,
          et fringilla leo tempor. Sed rhoncus ullamcorper libero, a faucibus
          eros pulvinar ac.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
