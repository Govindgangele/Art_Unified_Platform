import {
  Heart,
  Star,
  IndianRupee,
  User,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const ArtworkCard = ({ artwork }) => {

  const navigate = useNavigate();

  return (

    <div
      onClick={() => navigate(`/artwork/${artwork._id}`)}
      className="group cursor-pointer bg-[#0B1120] rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20"
    >

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={
            artwork.images?.length
              ? artwork.images[0].url
              : "https://placehold.co/600x600?text=Artwork"
          }
          alt={artwork.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Price */}

        <div className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-1 text-white font-semibold">

          <IndianRupee size={16} />

          {artwork.price}

        </div>

        {/* Category */}

        <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full text-sm text-white">

          {artwork.category}

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="text-xl font-bold text-white line-clamp-1">

          {artwork.title}

        </h2>

        <p className="text-gray-400 mt-3 line-clamp-2">

          {artwork.description}

        </p>

        {/* Artist */}

        <div className="flex items-center gap-3 mt-5">

          <img
            src={
              artwork.artist?.profileImage?.url ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                artwork.artist?.name || "Artist"
              )}&background=2563eb&color=fff`
            }
            alt={artwork.artist?.name}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>

            <p className="text-white font-medium">

              {artwork.artist?.name}

            </p>

            <p className="text-gray-500 text-sm">

              Artist

            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex justify-between items-center mt-6">

          <div className="flex items-center gap-2 text-red-400">

            <Heart size={18} />

            {artwork.likes?.length || 0}

          </div>

          <div className="flex items-center gap-2 text-yellow-400">

            <Star
              size={18}
              fill="currentColor"
            />

            {(artwork.averageRating ?? 0).toFixed(1)}

          </div>

        </div>

      </div>

    </div>

  );

};

export default ArtworkCard;