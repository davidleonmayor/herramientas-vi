import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex items-center justify-center top-16">
        <Outlet />
      </div>
    </>
  );
}
