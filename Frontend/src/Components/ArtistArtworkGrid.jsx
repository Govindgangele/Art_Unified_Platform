import { ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ArtistArtworkCard from "./ArtistArtworkCard";

const ArtistArtworkGrid = ({
  artworks,
  artist,
  currentUser,
  onDelete,
}) => {
  
  const navigate = useNavigate();

  const isOwnProfile =
    currentUser === artist?._id;

  return (

    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}

      <div className="flex flex-col md:flex-row justify-between md:items-center mb-10">

        <div>

          <h2 className="text-4xl font-bold text-white">

            Art Gallery

          </h2>

          <p className="text-gray-400 mt-2">

            Explore all artworks created by this artist.

          </p>

        </div>

        {/* Upload button only for owner */}

        {isOwnProfile && (

          <button
            onClick={() => navigate("/upload-artwork")}
            className="mt-5 md:mt-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition shadow-lg shadow-blue-600/30"
          >

            <ImagePlus size={20} />

            Upload Artwork

          </button>

        )}

      </div>

      {/* Empty State */}

      {artworks.length === 0 ? (

        <div className="bg-[#0B1120] border border-dashed border-gray-700 rounded-3xl py-24 flex flex-col items-center">

          <ImagePlus
            className="text-blue-500"
            size={70}
          />

          <h2 className="text-3xl font-bold mt-6">

            No Artworks Yet

          </h2>

          <p className="text-gray-400 mt-3">

            This artist hasn't uploaded any artwork yet.

          </p>

          {isOwnProfile && (

            <button
              onClick={() => navigate("/upload-artwork")}
              className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition"
            >

              Upload Artwork

            </button>

          )}

        </div>

      ) : (

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {artworks.map((artwork) => (

            <ArtistArtworkCard
              key={artwork._id}
              artwork={artwork}
              isOwnProfile={isOwnProfile}
              onDelete={onDelete}
            />

          ))}

        </div>

      )}

    </section>

  );
};

export default ArtistArtworkGrid;