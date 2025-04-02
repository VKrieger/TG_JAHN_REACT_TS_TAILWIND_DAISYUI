import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLayoutEffect, ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper= ({ children }: WrapperProps) => {
  const location = useLocation();


useLayoutEffect(() => {
  // Scroll to the top of the page when the route changes
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}, [location.pathname]);

return children;
};

function Root() {
  return (
    <Wrapper>
    <div className="flex flex-col min-h-screen min-w-screen">
        <Navbar/>
        <Outlet />
        <Footer/>

    </div>
    </Wrapper>
  )
}

export default Root