import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { useViewportSize } from "@mantine/hooks";
import { navLinks } from "../data";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useViewportSize();
  const isMobile = width < 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full px-8 shadow-sm shadow-neutral-500 h-16 flex items-center z-50">
      <nav className="flex justify-between items-center w-full">
        <NavLink to="/" className="font-bold">
          <img
            src="/vite.svg"
            className="w-full block"
            alt="Logo"
            style={{ width: 36, height: 36 }}
          />
        </NavLink>
        <ul
          className={cn(
            "flex items-center gap-8",
            isMenuOpen &&
              "bg-neutral-700 flex-col fixed top-16 right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-0 z-40",
            !isMenuOpen &&
              isMobile &&
              "bg-neutral-700 flex-col fixed top-16 right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-full z-40"
          )}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-sky-500" : "text-secondary"
                }
                onClick={closeMenuOnMobile}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          aria-labelledby="Menu Toggle Button"
          className="block md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className="size-6 text-secondary" />
          ) : (
            <MenuIcon className="size-6 text-secondary" />
          )}
        </button>
      </nav>
    </header>
  );
};
