import {
  Heart,
  Eye,
  Calendar,
  IndianRupee,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const ArtistArtworkCard = ({
  artwork,
  isOwnProfile,
  onDelete,
}) => {

  const navigate = useNavigate();

  return (

    <div
      onClick={() => navigate(`/artwork/${artwork._id}`)}
      className="group cursor-pointer bg-[#0B1120] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20"
    >

      {/* Artwork Image */}

      <div className="relative overflow-hidden">

        <img
          src={
            artwork.images?.length
              ? artwork.images[0].url
              : "https://placehold.co/600x600?text=Artwork"
          }
          alt={artwork.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Price */}

        <div className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-1 text-white font-semibold">

          <IndianRupee size={16} />

          {artwork.price}

        </div>

        {/* Category */}

        <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full text-sm">

          {artwork.category}

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">

          {artwork.title}

        </h2>

        <p className="text-gray-400 mt-3 line-clamp-3">

          {artwork.description}

        </p>

        {/* Stats */}

        <div className="flex justify-between mt-6">

          <div className="flex items-center gap-2 text-red-400">

            <Heart size={18} />

            {artwork.likesCount}

          </div>

          <div className="flex items-center gap-2 text-cyan-400">

            <Eye size={18} />

            {artwork.views}

          </div>

          <div className="flex items-center gap-2 text-yellow-400">

            <Star
              size={18}
              fill="currentColor"
            />

            {(artwork.averageRating ?? 0).toFixed(1)}

          </div>

        </div>

        {/* Date */}

        <div className="flex items-center gap-2 mt-5 text-gray-500">

          <Calendar size={16} />

          {new Date(
            artwork.createdAt
          ).toLocaleDateString()}

        </div>

        {/* Availability */}

        <div className="mt-4">

          <span
            className={`px-3 py-1 rounded-full text-sm ${
              artwork.isAvailable
                ? "bg-green-600/20 text-green-400"
                : "bg-red-600/20 text-red-400"
            }`}
          >
            {artwork.isAvailable
              ? "Available"
              : "Sold"}
          </span>

        </div>

        {/* Owner Buttons */}

        {isOwnProfile && (

          <div
            className="flex gap-4 mt-8"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition"
            >

              <Pencil size={18} />

              Edit

            </button>

            <button
              onClick={() => onDelete(artwork._id)}
              className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-red-500 text-red-400 hover:bg-red-600 hover:text-white transition"
            >

              <Trash2 size={18} />

              Delete

            </button>

          </div>

        )}

      </div>

    </div>

  );

};

export default ArtistArtworkCard;