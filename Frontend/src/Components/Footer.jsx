import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  
  Mail,
  Phone,
  MapPin,
  Palette,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#030712] border-t border-gray-800 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">

                <Palette className="text-white" />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">
                  Ka<span className="text-blue-500">la</span>
                </h2>

                <p className="text-xs uppercase tracking-[4px] text-blue-400">
                  Art Platform
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-7">
              Kala is a platform where artists showcase their creativity,
              connect with collectors, and inspire the world through art.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              <NavLink
                to="/"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Home
              </NavLink>

              <NavLink
                to="/artists"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Artists
              </NavLink>

              <NavLink
                to="/artworks"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Artworks
              </NavLink>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-gray-400">

                <Mail size={18} />

                support@kala.com

              </div>

              <div className="flex items-center gap-3 text-gray-400">

                <Phone size={18} />

                +91 98765 43210

              </div>

              <div className="flex items-center gap-3 text-gray-400">

                <MapPin size={18} />

                India

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#111827] hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#111827] hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebook size={22} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#111827] hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

            <button className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition duration-300 text-white font-semibold shadow-lg shadow-blue-600/30">
              Become an Artist
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 Kala. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;