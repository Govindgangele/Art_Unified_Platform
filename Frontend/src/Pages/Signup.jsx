import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Phone,
  Camera,
  Eye,
  EyeOff,
  MapPin,
} from "lucide-react";
import api from "../../../Backend/api/axios";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../Components/AuthLayout";
import GoogleButton from "../Components/GoogleButton";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "buyer",
    password: "",
    confirmPassword: "",

    // Google Places Autocomplete later
    address: {

      formattedAddress: "",

      city: "",

      state: "",

      country: "India",

      pincode: "",

      location: {

        type: "Point",

        coordinates: []

      }

    },

    profileImage: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      profileImage: file,
    }));

    setPreviewImage(URL.createObjectURL(file));
  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {

      setError("Passwords do not match.");

      return;
    }

    try {

      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);

      data.append("email", formData.email);

      data.append("phone", formData.phone);

      data.append("role", formData.role);

      data.append("password", formData.password);

      data.append("address", formData.address);

      if (formData.profileImage) {

        data.append(
          "profileImage",
          formData.profileImage
        );

      }

      const response = await api.post(

        "/auth/signup",

        data,

        {

          headers: {

            "Content-Type": "multipart/form-data",

          },

        }

      );

      console.log(response.data);

      alert("Account Created Successfully");

      navigate("/login");

    }

    catch (err) {

      console.log(err);

      setError(

        err.response?.data?.message ||

        "Something went wrong."

      );

    }

    finally {

      setLoading(false);

    }

  };
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join Kala and showcase your creativity."
    >
      <form onSubmit={handleSubmit}
        className="space-y-4">

        {/* Profile Image */}

        <div className="flex justify-center">

          <label className="relative cursor-pointer">

            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dashed border-blue-500 bg-[#111827] flex items-center justify-center">

              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera
                  size={24}
                  className="text-blue-400"
                />
              )}

            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />

          </label>

        </div>

        {/* Name + Email */}

        <div className="grid grid-cols-2 gap-3">

          <div className="relative">

            <User
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-[#111827] border border-gray-700 rounded-lg py-3 pl-10 text-white outline-none focus:border-blue-500"
            />

          </div>

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-[#111827] border border-gray-700 rounded-lg py-3 pl-10 text-white outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* Phone + Role */}

        <div className="grid grid-cols-2 gap-3">

          <div className="relative">

            <Phone
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full bg-[#111827] border border-gray-700 rounded-lg py-3 pl-10 text-white outline-none focus:border-blue-500"
            />

          </div>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="bg-[#111827] border border-gray-700 rounded-lg px-3 text-white outline-none focus:border-blue-500"
          >
            <option value="buyer">Buyer</option>
            <option value="artist">Artist</option>
          </select>

        </div>

        {/* Location */}

        <div className="relative">

          <MapPin
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Search your city..."
            className="w-full bg-[#111827] border border-gray-700 rounded-lg py-3 pl-10 text-white outline-none focus:border-blue-500"
          />

        </div>

        {/* Password */}

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full bg-[#111827] border border-gray-700 rounded-lg py-3 pl-10 pr-10 text-white outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

        {/* Confirm Password */}

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full bg-[#111827] border border-gray-700 rounded-lg py-3 pl-10 pr-10 text-white outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

        {/* Signup Button */}
        {
          error && (

            <p className="text-red-400 text-sm">

              {error}

            </p>

          )
        }
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
        >
          {

            loading ?

              "Creating..."

              :

              "Create Account"

          }
        </button>

        {/* Divider */}

        <div className="flex items-center gap-3">

          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="text-gray-500 text-sm">OR</span>

          <div className="flex-1 h-px bg-gray-700"></div>

        </div>

        <GoogleButton text="Continue with Google" />

        <p className="text-center text-sm text-gray-400">

          Already have an account?

          <Link
            to="/login"
            className="ml-1 text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>

        </p>

      </form>
    </AuthLayout>
  );
};

export default Signup;