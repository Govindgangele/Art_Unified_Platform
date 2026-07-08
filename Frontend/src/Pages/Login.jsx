import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import AuthLayout from "../Components/AuthLayout";
import GoogleButton from "../Components/GoogleButton";
import { useNavigate } from "react-router-dom";
import api from "../../../Backend/api/axios";
const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);

      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Invalid email or password."
      );

    } finally {

      setLoading(false);

    }
  };
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your artistic journey."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Email */}

        <div>

          <label className="text-gray-300 text-sm mb-2 block">
            Email Address
          </label>

          <div className="relative">

            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500 transition"
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="text-gray-300 text-sm mb-2 block">
            Password
          </label>

          <div className="relative">

            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-12 pr-12 text-white outline-none focus:border-blue-500 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

        </div>

        {/* Remember Me */}

        <div className="flex justify-between items-center text-sm">

          <label className="flex items-center gap-2 text-gray-300 cursor-pointer">

            <input
              type="checkbox"
              className="accent-blue-600"
            />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}
        {error && (
          <p className="text-red-400 text-sm">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-lg shadow-blue-600/30 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4">

          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="text-gray-500">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-700"></div>

        </div>

        {/* Google */}

        <GoogleButton text="Continue with Google" />

        {/* Guest */}

        <button
          type="button"
          className="w-full py-3 rounded-xl border border-gray-700 text-white hover:border-blue-500 transition"
        >
          Continue as Guest
        </button>

        {/* Signup */}

        <p className="text-center text-gray-400">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-400 ml-2 hover:text-blue-300"
          >
            Sign Up
          </Link>

        </p>

      </form>
    </AuthLayout>
  );
};

export default Login;