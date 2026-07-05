import { NavLink } from "react-router-dom";
import {
  Heart,
  Star,
  IndianRupee,
  Eye,
  User,
} from "lucide-react";

const ArtworkCard = ({ artwork }) => {
  return (
    <div className="group bg-[#0B1120] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20">

      {/* Artwork Image */}

      <div className="relative overflow-hidden">

        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">

          <NavLink
            to={`/artwork/${artwork._id}`}
            className="opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            View Details
          </NavLink>

        </div>

        {/* Price */}

        <div className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-1 text-white font-semibold">

          <IndianRupee size={16} />

          {artwork.price}

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white line-clamp-1">
          {artwork.title}
        </h2>

        <p className="text-gray-400 mt-3 line-clamp-2">
          {artwork.description}
        </p>

        {/* Artist */}

        <div className="flex items-center gap-3 mt-6">

          <img
            src={
              artwork.artist.profilePic
                ? artwork.artist.profilePic
                : `https://ui-avatars.com/api/?name=${artwork.artist.name}&background=2563eb&color=fff`
            }
            alt={artwork.artist.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />

          <div>

            <h3 className="text-white font-semibold">
              {artwork.artist.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {artwork.artist.location}
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex justify-between mt-6 border-t border-gray-800 pt-5">

          <div className="flex items-center gap-2 text-red-400">

            <Heart size={18} />

            {artwork.likes}

          </div>

          <div className="flex items-center gap-2 text-cyan-400">

            <Eye size={18} />

            {artwork.views}

          </div>

          <div className="flex items-center gap-2 text-yellow-400">

            <Star
              fill="#FACC15"
              color="#FACC15"
              size={18}
            />

            {artwork.rating}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ArtworkCard;