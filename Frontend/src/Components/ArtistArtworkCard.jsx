import {
  Heart,
  Eye,
  Calendar,
  IndianRupee,
  Pencil,
  Trash2,
} from "lucide-react";

const ArtistArtworkCard = ({ artwork }) => {
  return (
    <div className="group bg-[#0B1120] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20">

      {/* Artwork Image */}

      <div className="relative overflow-hidden">

        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Price */}

        <div className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-1 text-white font-semibold">

          <IndianRupee size={16} />

          {artwork.price}

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {artwork.title}
        </h2>

        <p className="text-gray-400 mt-4 leading-7">
          {artwork.description}
        </p>

        {/* Stats */}

        <div className="flex justify-between mt-6">

          <div className="flex items-center gap-2 text-red-400">

            <Heart size={18} />

            {artwork.likes}

          </div>

          <div className="flex items-center gap-2 text-cyan-400">

            <Eye size={18} />

            {artwork.views}

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <Calendar size={18} />

            {artwork.date}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <button className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition">

            <Pencil size={18} />

            Edit

          </button>

          <button className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-red-500 text-red-400 hover:bg-red-600 hover:text-white transition">

            <Trash2 size={18} />

            Delete

          </button>

        </div>

      </div>

    </div>
  );
};

export default ArtistArtworkCard;