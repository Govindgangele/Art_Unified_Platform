import { Search, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArtworkSearch = ({ query, setQuery }) => {

  const navigate = useNavigate();

  return (

    <div className="mb-12">

      {/* Heading */}

      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold text-white">

          Explore Artworks

        </h1>

        <p className="mt-4 text-gray-400 text-lg">

          Discover unique artworks from talented artists across India.

        </p>

      </div>

      {/* Search Bar */}

      <div className="flex flex-col lg:flex-row gap-4">

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search artworks using natural language..."
            className="w-full bg-[#0B1120] border border-gray-700 rounded-xl py-4 pl-14 pr-5 text-white outline-none focus:border-blue-500 transition"
          />

        </div>

        {/* Upload Artwork */}

        <button
          onClick={() => navigate("/upload-artwork")}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
        >

          <Upload size={20} />

          Upload Artwork

        </button>

      </div>

    </div>

  );

};

export default ArtworkSearch;