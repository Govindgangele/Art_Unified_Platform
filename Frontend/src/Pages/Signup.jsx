import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  MapPin,
  Phone,
  Camera,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

import AuthLayout from "../Components/AuthLayout";
import GoogleButton from "../Components/GoogleButton";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <AuthLayout
      title="Join Kala 🎨"
      subtitle="Become a part of India's growing art community."
    >
      <form className="space-y-5">

        {/* Profile Picture */}

        <div className="flex justify-center">

          <label className="relative cursor-pointer">

            <div className="w-28 h-28 rounded-full border-2 border-dashed border-blue-500 flex items-center justify-center bg-[#111827] hover:bg-[#1e293b] transition">

              <Camera size={34} className="text-blue-400"/>

            </div>

            <input
              type="file"
              className="hidden"
            />

          </label>

        </div>

        {/* Name */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Full Name
          </label>

          <div className="relative">

            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Email
          </label>

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Phone Number
          </label>

          <div className="relative">

            <Phone
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* Location */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Location
          </label>

          <div className="relative">

            <MapPin
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="City, State"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* Role */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Register As
          </label>

          <select
            className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 px-4 text-white outline-none focus:border-blue-500"
          >
            <option>Artist</option>
            <option>Buyer</option>
          </select>

        </div>

        {/* Password */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Password
          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-12 text-white outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
            </button>

          </div>

        </div>

        {/* Confirm Password */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Confirm Password
          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-12 text-white outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirm ? <EyeOff size={20}/> : <Eye size={20}/>}
            </button>

          </div>

        </div>

        {/* Bio */}

        <div>

          <label className="text-gray-300 text-sm block mb-2">
            Bio (Optional)
          </label>

          <textarea
            rows={4}
            placeholder="Tell everyone about yourself..."
            className="w-full bg-[#111827] border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-blue-500 resize-none"
          />

        </div>

        {/* Signup Button */}

        <button
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
        >
          Create Account
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4">

          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="text-gray-500">OR</span>

          <div className="flex-1 h-px bg-gray-700"></div>

        </div>

        <GoogleButton text="Sign up with Google" />

        <p className="text-center text-gray-400">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>

        </p>

      </form>
    </AuthLayout>
  );
};

export default Signup;