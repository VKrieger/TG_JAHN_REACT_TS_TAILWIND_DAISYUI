import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLayoutEffect, ReactNode, useState } from "react";
import { navItems, Logo } from "../api/navItems";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function Root() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <Wrapper>
      <Navbar

        setNavOpen={setNavOpen}
        navItems={navItems}
        logo={Logo}
      />
      <div

        className={`transition-transform duration-400 ease-in-out ${
          navOpen ? "translate-x-1/2" : "translate-x-0"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Root;
