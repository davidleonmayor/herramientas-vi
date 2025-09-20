import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img
        src="/vite.svg"
        className="w-full block"
        alt="Logo"
        style={{ width: 36, height: 36 }}
      />
    </Link>
  );
}
