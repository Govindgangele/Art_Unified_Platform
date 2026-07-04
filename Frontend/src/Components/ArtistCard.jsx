import { NavLink } from "react-router-dom";
import {
  Mail,
  MapPin,
  Star,
  Image,
  User,
} from "lucide-react";

const ArtistCard = ({ artist }) => {
  return (
    <div className="group bg-[#0B1120] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20">

      {/* Cover */}

      <div className="h-28 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 relative">

        <div className="absolute inset-0 bg-black/20"></div>

      </div>

      {/* Profile */}

      <div className="relative px-6 pb-6">

        <div className="absolute -top-14 left-1/2 -translate-x-1/2">

          <img
            src={
              artist.profilePic
                ? artist.profilePic
                : `https://ui-avatars.com/api/?name=${artist.name}&background=2563eb&color=fff&size=200`
            }
            alt={artist.name}
            className="w-28 h-28 rounded-full border-4 border-[#0B1120] object-cover shadow-xl"
          />

        </div>

        {/* Info */}

        <div className="pt-20 text-center">

          <h2 className="text-2xl font-bold text-white">
            {artist.name}
          </h2>

          <div className="flex justify-center items-center gap-2 mt-3 text-gray-400">

            <Mail size={16} />

            <span className="text-sm truncate">
              {artist.email}
            </span>

          </div>

          <div className="flex justify-center items-center gap-2 mt-2 text-gray-400">

            <MapPin size={16} />

            <span>
              {artist.location}
            </span>

          </div>

          {/* Stats */}

          <div className="flex justify-center gap-8 mt-6">

            <div>

              <div className="flex justify-center">

                <Image
                  className="text-blue-400"
                  size={18}
                />

              </div>

              <h3 className="mt-1 text-lg font-bold">
                {artist.artworks}
              </h3>

              <p className="text-xs text-gray-500">
                Artworks
              </p>

            </div>

            <div>

              <div className="flex justify-center">

                <Star
                  fill="#FFD700"
                  color="#FFD700"
                  size={18}
                />

              </div>

              <h3 className="mt-1 text-lg font-bold">
                {artist.rating}
              </h3>

              <p className="text-xs text-gray-500">
                Rating
              </p>

            </div>

          </div>

          {/* Button */}

          <NavLink
            to={`/artist/${artist._id}`}
            className="mt-8 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-xl text-white font-semibold hover:scale-105 transition duration-300"
          >
            <User size={18} />

            View Profile
          </NavLink>

        </div>

      </div>

    </div>
  );
};

export default ArtistCard;