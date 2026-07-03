import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import Footer from "../Components/Footer";
const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg,#ffffff22 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/15 rounded-full blur-[180px]" />

        <div className="absolute -left-40 top-60 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

      </div>

      <Navbar />

      <main className="pt-28">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;