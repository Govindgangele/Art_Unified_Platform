import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  // Replace this with your auth state later
  const isLoggedIn = true;

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition";

  return (
  <header className="fixed top-0 left-0 w-full z-50 py-4">
    <div className="max-w-7xl mx-auto px-6">

      <div className="h-20 bg-[#0B1120]/75 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-900/20 flex items-center justify-between px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-600/40">
            <span className="text-white font-bold text-xl">K</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Ka<span className="text-blue-500">la</span>
            </h1>

            <p className="text-[10px] uppercase tracking-[3px] text-blue-400">
              ART PLATFORM
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-12">

          <NavLink to="/" className={navLinkStyle}>
            {({ isActive }) => (
              <div className="flex flex-col items-center">
                <span className={`${isActive ? "text-white" : "text-gray-400 hover:text-white"} transition`}>
                  Home
                </span>

                <span
                  className={`mt-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-8" : "w-0"
                  }`}
                />
              </div>
            )}
          </NavLink>

          <NavLink to="/artist" className={navLinkStyle}>
            {({ isActive }) => (
              <div className="flex flex-col items-center">
                <span className={`${isActive ? "text-white" : "text-gray-400 hover:text-white"} transition`}>
                  Artists
                </span>

                <span
                  className={`mt-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-8" : "w-0"
                  }`}
                />
              </div>
            )}
          </NavLink>

          <NavLink to="/artworks" className={navLinkStyle}>
            {({ isActive }) => (
              <div className="flex flex-col items-center">
                <span className={`${isActive ? "text-white" : "text-gray-400 hover:text-white"} transition`}>
                  Artworks
                </span>

                <span
                  className={`mt-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-8" : "w-0"
                  }`}
                />
              </div>
            )}
          </NavLink>

        </nav>

        {/* Right */}

        <div className="hidden md:flex items-center gap-4">

          {isLoggedIn ? (
            <NavLink
              to="/profile"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-600/30 hover:scale-105 transition duration-300"
            >
              <User size={18} />
              Profile
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition duration-300"
              >
                Sign Up
              </NavLink>
            </>
          )}

        </div>

        {/* Mobile */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden mt-4 bg-[#0B1120]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6">

          <nav className="flex flex-col gap-5">

            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/artists"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Artists
            </NavLink>

            <NavLink
              to="/artworks"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Artworks
            </NavLink>

            <div className="border-t border-gray-700 pt-5">

              {isLoggedIn ? (
                <NavLink
                  to="/profile"
                  className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-xl text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>
              ) : (
                <div className="flex flex-col gap-3">

                  <NavLink
                    to="/login"
                    className="text-center border border-blue-500 py-3 rounded-xl text-blue-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/signup"
                    className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-xl text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </NavLink>

                </div>
              )}

            </div>

          </nav>

        </div>

      )}

    </div>
  </header>
);
};

export default Navbar;