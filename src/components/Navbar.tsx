import { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import useWindowDimensions from "../hooks/useWindowDimensions";
import { NavItem } from "../api/navItems";

interface NavbarProps {
  navItems: NavItem[];
  logo: string;
  setNavOpen: (open: boolean) => void;
}

const Navbar = ({ navItems, logo, setNavOpen }: NavbarProps) => {
  const outletRef = useRef<HTMLDivElement>(null);
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  // State to manage which submenu is active (null bedeutet keins offen)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    const newState = !nav;
    setNav(newState);
    setNavOpen(newState);

    // Optional: Schließe geöffnete Submenüs beim Schließen der Hauptnavigation
    if (nav) setActiveSubmenu(null);
  };

  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 1024);
  }, [width]);

  // Array containing navigation items with an optional submenu

  // Handler für Submenüs
  const handleSubmenu = (id: number) => {
    if (activeSubmenu === id) {
      setActiveSubmenu(null); // schließt das Submenü, wenn es schon offen war
    } else {
      setActiveSubmenu(id); // öffnet das angeklickte Submenü
    }
  };

  return (
    <div className="bg-white flex justify-between items-center h-24 max-full mx-auto px-4">
      {isMobile && (
        <div ref={outletRef} onClick={handleNav} className="block">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      )}

      {isMobile && (
        <ul
          className={
            nav
              ? "z-1 mt-24 fixed left-0 top-0 w-[50%] h-full  bg-white text-black ease-in-out duration-400 h-max"
              : "z-1 mt-24 ease-in-out w-[60%] duration-400 fixed top-0 bottom-0 left-[-100%] h-max"
          }
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-2 m-4 rounded-xl hover:bg-[#d3d1ce]  bg-[#eae8e5] duration-300  cursor-pointer "
            >
              {/* Wenn ein Submenü existiert, dann wird beim Klick der handleSubmenu-Handler benutzt */}
              {item.submenu ? (
                <div onClick={() => handleSubmenu(item.id)}>{item.text}</div>
              ) : (
                <Link
                  to={`/${item.text}`}
                  onClick={() => {
                    setNavOpen(false);
                    setActiveSubmenu(null);
                    setNav(false);
                  }}
                >
                  {item.text}
                </Link>
              )}
              {/* Bedingtes Rendering des Submenüs */}
              {item.submenu && activeSubmenu === item.id && (
                <ul className="ml-4 mt-2 border-l border-gray-400">
                  {item.submenu.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="p-2 hover:bg-white duration-300 rounded-md cursor-pointer"
                    >
                      <Link
                        to={`/${subItem.text}`}
                        onClick={() => {
                          setNavOpen(false);
                          setActiveSubmenu(null);
                          setNav(false);
                        }}
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Logo */}
      <div className="mx-2 px-2">
        <Link to="/">
          <img className="h-14" src={logo} alt="logo" />
        </Link>
      </div>

      {!isMobile && (
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {/* Für Desktop kann man zusätzlich auf Hover-Events setzen */}
              {item.submenu ? (
                <div onMouseEnter={() => setActiveSubmenu(item.id)}>
                  {item.text}
                  {activeSubmenu === item.id && (
                    <ul
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-md z-50 overflow-hidden"
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.id} className="rounded-md w-37">
                          <Link
                            to={`/${subItem.text}`}
                            className="block p-4 hover:bg-[#00df9a] "
                          >
                            {subItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link to={`/${item.text}`} className="block w-full h-full">
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
