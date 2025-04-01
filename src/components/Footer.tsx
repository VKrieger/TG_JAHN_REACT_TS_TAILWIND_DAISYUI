import { Link } from "react-router-dom";
import FacebookLogo from "../styles/icons/facebook_logo.webp";
import InstagramLogo from "../styles/icons/instagram_logo.webp";

function Footer() {
  return (
    <footer className=" z-1 footer footer-horizontal footer-center bg-(--color-dark-green) text-base-content  p-8 text-white mt-auto gap-6 ">
      <p>TG Jahn Namedy auf Social Media</p>
      <nav>
        <div className="flex gap-10">
          <a href="https://www.facebook.com/TGNAMEDY" target="_blank">
            <img src={FacebookLogo} className="w-6.5" />
          </a>
          <a href="https://www.instagram.com/tgjahnnamedy" target="_blank">
            <img src={InstagramLogo} className="w-6.5 text-black" />
          </a>
        </div>
      </nav>
      <nav className="flex gap-10">
        <Link to="/datenschutz" className="link link-hover ">
          Datenschutz
        </Link>
        <Link to="/impressum" className="link link-hover">
          Impressum
        </Link>
      </nav>
      <aside>
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} - TG Jahn Namedy 1910 e.V. -
          Alle Rechte vorbehalten.
        </p>
      </aside>
    </footer>
  );
}
export default Footer;
