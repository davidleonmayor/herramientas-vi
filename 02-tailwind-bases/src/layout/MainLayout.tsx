import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-16 flex justify-center items-center">
        <Outlet />
      </div>
    </>
  );
}
