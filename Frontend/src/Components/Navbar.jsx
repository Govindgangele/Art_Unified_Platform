import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";
import api from "../../../Backend/api/axios";

const Navbar = () => {
  // Replace this with your auth state later
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));



  const isLoggedIn = !!user;



  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {
      await api.post("/auth/logout");

      localStorage.removeItem("user");

      setProfileOpen(false);

      navigate("/login");

      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };
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
                    className={`mt-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${isActive ? "w-8" : "w-0"
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
                    className={`mt-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${isActive ? "w-8" : "w-0"
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
                    className={`mt-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${isActive ? "w-8" : "w-0"
                      }`}
                  />
                </div>
              )}
            </NavLink>

          </nav>

          {/* Right */}

          <div className="hidden md:flex items-center gap-4">

            {isLoggedIn ? (
              <div
                className="relative"
                ref={profileRef}
              >
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-105 transition"
                >
                  <img
                    src={
                      user?.profileImage?.url
                        ? user.profileImage.url
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name)}` ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.name
                        )}`
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />

                  <span className="font-medium">
                    {user?.name}
                  </span>

                  <ChevronDown size={18} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#0B1120] border border-white/10 shadow-2xl overflow-hidden">

                    <div className="px-5 py-4 border-b border-white/10">

                      <p className="font-semibold text-white">
                        {user?.name}
                      </p>

                      <p className="text-sm text-gray-400 truncate">
                        {user?.email}
                      </p>

                    </div>

                    <button
                      onClick={() => {
                        navigate("/profile");
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-5 py-4 hover:bg-white/5 transition"
                    >
                      Account Dashboard
                    </button>

                    <button
                      onClick={() => {
                        navigate(`/artist/${user._id}`);
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-5 py-4 hover:bg-white/5 transition"
                    >
                      View Public Profile
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-5 py-4 text-red-400 hover:bg-red-500/10 transition"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>
                )}
              </div>
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
                to="/artist"
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
                  <div className="space-y-3">

                    <NavLink
                      to="/profile"
                      className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-xl text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      Account Dashboard
                    </NavLink>

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        handleLogout();
                      }}
                      className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white transition"
                    >
                      Logout
                    </button>

                  </div>
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