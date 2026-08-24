import { User, Pencil, ImagePlus, LogOut, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");

      localStorage.removeItem("user");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <div className="max-w-3xl mx-auto pt-36 px-6">

        {/* Card */}

        <div className="bg-[#0B1120] border border-white/10 rounded-3xl overflow-hidden shadow-xl">

          {/* Cover */}

          <div className="h-44 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500" />

          {/* Profile */}

          <div className="px-8 pb-8">

            <div className="-mt-16 flex flex-col items-center">

              <img
                src={
                  user.profileImage?.url ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.name
                  )}`
                }
                alt=""
                className="w-32 h-32 rounded-full border-4 border-[#0B1120] object-cover"
              />

              <h2 className="text-3xl font-bold mt-4">
                {user.name}
              </h2>

              <p className="text-blue-400 mt-2 capitalize">
                {user.role}
              </p>

              <p className="text-gray-400 mt-2">
                {user.email}
              </p>

            </div>

            {/* Menu */}

            <div className="mt-10 space-y-4">

              <button
                onClick={() => navigate(`/artist/${user._id}`)}
                className="w-full flex items-center justify-between bg-[#111827] hover:bg-[#1f2937] transition rounded-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <User className="text-blue-400" />
                  <span>View Public Profile</span>
                </div>

                <ChevronRight />
              </button>

              <button
                onClick={() => navigate("/profile/edit")}
                className="w-full flex items-center justify-between bg-[#111827] hover:bg-[#1f2937] transition rounded-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <Pencil className="text-blue-400" />
                  <span>Edit Profile</span>
                </div>

                <ChevronRight />
              </button>

              <button
                onClick={() => navigate("/upload-artwork")}
                className="w-full flex items-center justify-between bg-[#111827] hover:bg-[#1f2937] transition rounded-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <ImagePlus className="text-blue-400" />
                  <span>Upload Artwork</span>
                </div>

                <ChevronRight />
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-between bg-red-600 hover:bg-red-700 transition rounded-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <LogOut />
                  <span>Logout</span>
                </div>

                <ChevronRight />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;