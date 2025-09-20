import { NavLink } from "react-router-dom";

import { navLinks } from "../data";

export function HomePage() {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className="text-center font-bold p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
