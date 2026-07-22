import { NavLink } from "react-router-dom";
import {
  Mail,
  MapPin,
  Star,
  Image,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/artist/${artist._id}`)}
      className="group cursor-pointer bg-[#0B1120] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20"
    >

      {/* Cover */}

      <div className="h-28 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 relative">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Profile */}

      <div className="relative px-6 pb-6">

        <div className="absolute -top-14 left-1/2 -translate-x-1/2">

          <img
            src={
              artist.profileImage?.url
                ? artist.profileImage.url
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  artist.name
                )}&background=2563eb&color=fff&size=200`
            }
            alt={artist.name}
            className="w-28 h-28 rounded-full border-4 border-[#0B1120] object-cover shadow-xl"
          />

        </div>

        {/* Artist Info */}

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
              {artist.address?.city}
              {artist.address?.state
                ? `, ${artist.address.state}`
                : ""}
            </span>

          </div>
          <div className="flex justify-center items-center gap-2 mt-2">

            <MapPin
              size={15}
              className="text-blue-400"
            />

            <span className="text-sm text-gray-400">

              {artist.distance
                ? `${artist.distance.toFixed(1)} km away`
                : `${artist.address?.city || ""}, ${artist.address?.state || ""}`}

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
                {artist.artworksCount}
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
                {artist.averageRating?.toFixed(1)}
              </h3>

              <p className="text-xs text-gray-500">
                Rating
              </p>

            </div>

          </div>

          {/* Followers */}

          <p className="mt-5 text-sm text-gray-400">
            {artist.followersCount} Followers
          </p>

          {/* Button */}



        </div>

      </div>

    </div>
  );
};

export default ArtistCard;