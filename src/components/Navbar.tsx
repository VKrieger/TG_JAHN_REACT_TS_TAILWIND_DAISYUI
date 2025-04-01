import Logo from "../styles/icons/logo.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
  const vereinDropdownRef = useRef<HTMLDivElement>(null);
  const fussballDropdownRef = useRef<HTMLDivElement>(null);
  const breitensportDropdownRef = useRef<HTMLDivElement>(null);

  const handleOnClickVerein = () => {
    if (vereinDropdownRef.current) {
      vereinDropdownRef.current.focus();
      vereinDropdownRef.current.blur();
    }
  };
  const handleOnClickFussball = () => {
    if (fussballDropdownRef.current) {
      fussballDropdownRef.current.focus();
      fussballDropdownRef.current.blur();
    }
  };

  const handleOnClickBreitensport = () => {
    if (breitensportDropdownRef.current) {
      breitensportDropdownRef.current.focus();
      breitensportDropdownRef.current.blur();
    }
  };

  const linkItems: React.ReactNode = (
    <>
      <li>
        <Link to="/news">Aktuelles</Link>
      </li>
      <li>
        <div
          tabIndex={0}
          onClick={handleOnClickVerein}
          ref={vereinDropdownRef}
          className="dropdown dropdown-center dropdown-hover"
        >
          <div tabIndex={0} role="button">
            Verein
          </div>
          <ul className="menu dropdown-content text-base bg-base-100 rounded-box z-1 mt-10 w-40 p-2 shadow-sm">
            <li>
              <Link to="/ueber_uns">Über Uns</Link>
            </li>
            <li>
              <Link to="/vorstand">Vorstand</Link>
            </li>
            <li>
              <Link to="/mitgliedschaft">Mitgliedschaft</Link>
            </li>
            <li>
              <Link to="/downloads">Downloads</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div
          tabIndex={0}
          onClick={handleOnClickFussball}
          ref={fussballDropdownRef}
          className="dropdown dropdown-hover dropdown-center"
        >
          <div tabIndex={0} role="button">
            Fussball
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content text-base bg-base-100 rounded-box z-1 mt-10 w-40 p-2 shadow-sm"
          >
            <li>
              <Link to="/bambinis">Bambinis</Link>
            </li>
            <li>
              <Link to="/f_jugend">F-Jugend</Link>
            </li>
            <li>
              <Link to="/e_jugend">E-Jugend</Link>
            </li>
            <li>
              <Link to="/d_jugend">D-Jugend</Link>
            </li>
            <li>
              <Link to="/herren">Alte Herren</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div
          tabIndex={0}
          onClick={handleOnClickBreitensport}
          ref={breitensportDropdownRef}
          className="dropdown dropdown-hover dropdown-center"
        >
          <div tabIndex={0} role="button">
            Breitensport
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content text-base bg-base-100 rounded-box z-1 mt-10 w-40 p-2 shadow-sm0"
          >
            <li>
              <Link to="/gymnastik">Gymnastik</Link>
            </li>
            <li>
              <Link to="/bauch_beine_po">Bauch Bein Po</Link>
            </li>
            <li>
              <Link to="/leichtathletik">Leichtathletik</Link>
            </li>
            <li>
              <Link to="/kinderturnen">Kinderturnen</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="/badminton">Badminton</Link>
      </li>
      <li>
        <Link to="/tischtennis">Tischtennis</Link>
      </li>
      <li>
        <Link to="/volleyball">Volleyball</Link>
      </li>
    </>
  );

  return (
    <div className="drawer z-1 fixed">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-white w-full">
          <div className="flex-8 lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 ">
            <Link to="/">
              <img className="h-14 " src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal text-xl">
              {/* Navbar menu content here */}
              {linkItems}
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {linkItems}
        </ul>
      </div>
    </div>

    // <div className="navbar fixed  z-1 bg-base-100 shadow-sm h-18 px-12">
    //   <div className="flex-1">
    //     <Link to="/">
    //       <img className="h-14 " src={Logo} alt="logo" />
    //     </Link>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal text-xl">
    //      {linkItems}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Navbar;
