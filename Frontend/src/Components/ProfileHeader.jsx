import {
  Mail,
  MapPin,
  Star,
  Palette,
  User,
} from "lucide-react";

const ProfileHeader = ({ artist }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">

      {/* Cover Banner */}

      <div className="relative h-80 rounded-3xl overflow-hidden border border-blue-900 shadow-2xl">

        <img
          src={
            artist.coverImage ||
            "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600"
          }
          alt="cover"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

      </div>

      {/* Profile Card */}

      <div className="relative bg-[#0B1120] border border-gray-800 rounded-3xl -mt-16 shadow-2xl px-8 pb-8">

        {/* Profile Image */}

        <div className="absolute -top-20 left-10">

          <img
            src={
              artist.profilePic
                ? artist.profilePic
                : `https://ui-avatars.com/api/?name=${artist.name}&background=2563eb&color=fff&size=300`
            }
            alt={artist.name}
            className="w-40 h-40 rounded-full border-[6px] border-[#0B1120] object-cover shadow-xl"
          />

        </div>

        {/* Content */}

        <div className="pt-28 flex flex-col lg:flex-row justify-between gap-10">

          {/* Left */}

          <div>

            <h1 className="text-5xl font-bold text-white">
              {artist.name}
            </h1>

            <div className="flex flex-wrap gap-6 mt-6 text-gray-300">

              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                {artist.email}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-400" />
                {artist.location}
              </div>

              <div className="flex items-center gap-2">
                <Palette size={18} className="text-blue-400" />
                {artist.category}
              </div>

            </div>

            {/* Rating */}

            <div className="flex items-center gap-3 mt-6">

              <Star
                fill="#FFD700"
                color="#FFD700"
                size={24}
              />

              <span className="text-xl font-semibold">
                {artist.rating}
              </span>

              <span className="text-gray-500">
                Artist Rating
              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-4 h-fit">

            <button className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition">

              Edit Profile

            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition shadow-lg shadow-blue-600/30">

              <User size={18} />

              Follow

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProfileHeader;