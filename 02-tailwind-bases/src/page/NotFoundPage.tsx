import { Undo2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Filtro", path: "/filter" },
  { name: "Pricing", path: "/pricing" },
];

export function NotFoundPage() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 text-center">
      {/* Imagen o gif */}
      <img
        src="/this-is-fine-404.gif"
        alt="All is fine"
        className="max-w-xs md:max-w-md rounded-lg shadow-lg"
      />

      {/* Título grande */}
      <h2 className="text-6xl font-bold mt-6">404</h2>
      <span className="text-2xl font-semibold mt-2">¡Ups! Page not found</span>

      {/* Texto descriptivo */}
      <p className="max-w-lg text-gray-600 dark:text-gray-400 mt-4">
        The page you are looking for does not exist or has been moved. Don’t
        worry, these errors are normal in programming.
      </p>

      {/* Botón principal */}
      <NavLink
        to="/"
        className="flex items-center gap-2 mt-6 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
      >
        <Undo2 className="w-4 h-4" />
        Return home
      </NavLink>

      {/* Links sugeridos */}
      <div className="mt-8">
        <p className="mb-3 text-gray-700 dark:text-gray-300">
          Maybe you were looking for:
        </p>
        <ul className="flex flex-wrap justify-center gap-4">
          {LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
