import {
  Heart,
  Eye,
  Star,
  IndianRupee,
  MapPin,
  User,
  Palette,
  Ruler,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const ArtworkInfo = ({ artwork }) => {

  const navigate = useNavigate();

  return (

    <div className="p-8">

      {/* Artist */}

      <div
        onClick={() => navigate(`/artist/${artwork.artist._id}`)}
        className="flex items-center gap-4 cursor-pointer hover:bg-[#111827] p-3 rounded-xl transition"
      >

        <img
          src={
            artwork.artist?.profileImage?.url ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              artwork.artist?.name || "Artist"
            )}`
          }
          alt={artwork.artist?.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>

          <h3 className="text-lg font-semibold text-white">

            {artwork.artist?.name}

          </h3>

          <p className="text-gray-400 text-sm">

            View Profile

          </p>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-800 my-6"></div>

      {/* Title */}

      <h1 className="text-3xl font-bold text-white">

        {artwork.title}

      </h1>

      {/* Price */}

      <div className="flex items-center gap-2 mt-5 text-3xl font-bold text-blue-400">

        <IndianRupee size={30} />

        {artwork.price}

      </div>

      {/* Category */}

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full">

          {artwork.category}

        </span>

        <span className="bg-cyan-600/20 text-cyan-400 px-4 py-2 rounded-full">

          {artwork.medium}

        </span>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="text-center">

          <Heart className="mx-auto text-red-400" />

          <p className="text-white mt-2">

            {artwork.likes?.length || 0}

          </p>

          <span className="text-gray-500 text-sm">

            Likes

          </span>

        </div>

        <div className="text-center">

          <Eye className="mx-auto text-cyan-400" />

          <p className="text-white mt-2">

            {artwork.views}

          </p>

          <span className="text-gray-500 text-sm">

            Views

          </span>

        </div>

        <div className="text-center">

          <Star
            className="mx-auto text-yellow-400"
            fill="currentColor"
          />

          <p className="text-white mt-2">

            {(artwork.averageRating ?? 0).toFixed(1)}

          </p>

          <span className="text-gray-500 text-sm">

            Rating

          </span>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-800 my-8"></div>

      {/* Description */}

      <div>

        <h2 className="text-xl font-semibold text-white mb-4">

          Description

        </h2>

        <p className="text-gray-300 leading-8">

          {artwork.description}

        </p>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-800 my-8"></div>

      {/* Artwork Details */}

      <div className="space-y-5">

        <div className="flex items-center gap-4">

          <Palette className="text-blue-400" />

          <div>

            <p className="text-gray-500 text-sm">

              Category

            </p>

            <p className="text-white">

              {artwork.category}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <Palette className="text-cyan-400" />

          <div>

            <p className="text-gray-500 text-sm">

              Medium

            </p>

            <p className="text-white">

              {artwork.medium}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <Ruler className="text-green-400" />

          <div>

            <p className="text-gray-500 text-sm">

              Dimensions

            </p>

            <p className="text-white">

              {artwork.dimensions.width} ×{" "}
              {artwork.dimensions.height}{" "}
              {artwork.dimensions.unit}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <MapPin className="text-red-400" />

          <div>

            <p className="text-gray-500 text-sm">

              Availability

            </p>

            <p
              className={
                artwork.isAvailable
                  ? "text-green-400"
                  : "text-red-400"
              }
            >

              {artwork.isAvailable
                ? "Available"
                : "Sold"}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ArtworkInfo;