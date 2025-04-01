import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
        <Navbar/>
        <Outlet />
        <Footer/>

    </div>
  )
}

export default Root