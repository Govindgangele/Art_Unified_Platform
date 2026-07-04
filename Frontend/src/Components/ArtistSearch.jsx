import { Search, MapPin, LocateFixed } from "lucide-react";
import { useState } from "react";

const ArtistSearch = () => {
  const [artistName, setArtistName] = useState("");
  const [radius, setRadius] = useState(10);

  const handleNameSearch = () => {
    console.log("Searching:", artistName);
    // Backend API later
  };

  const handleRadiusSearch = () => {
    console.log("Searching within", radius, "km");
    // Backend API later
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">

      <div className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8 shadow-xl">

        {/* Heading */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-white">
            Discover Artists
          </h1>

          <p className="text-gray-400 mt-3">
            Search talented artists by name or find creators near your location.
          </p>

        </div>

        {/* Search by Name */}

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search artist by name..."
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-14 pr-4 text-white outline-none focus:border-blue-500 transition"
            />

          </div>

          <button
            onClick={handleNameSearch}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition text-white font-semibold shadow-lg shadow-blue-600/20"
          >
            Search
          </button>

        </div>

        {/* Divider */}

        <div className="flex items-center gap-4 my-10">

          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="text-gray-500 uppercase tracking-widest text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-700"></div>

        </div>

        {/* Radius Search */}

        <div className="grid lg:grid-cols-3 gap-5">

          {/* Radius */}

          <div className="relative">

            <MapPin
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <select
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-14 pr-4 text-white outline-none focus:border-blue-500"
            >
              <option value={5}>5 KM</option>
              <option value={10}>10 KM</option>
              <option value={20}>20 KM</option>
              <option value={50}>50 KM</option>
              <option value={100}>100 KM</option>
            </select>

          </div>

          {/* Current Location */}

          <button
            className="flex justify-center items-center gap-2 bg-[#111827] border border-gray-700 rounded-xl py-4 hover:border-blue-500 transition"
          >
            <LocateFixed size={20} />

            Use My Location
          </button>

          {/* Search */}

          <button
            onClick={handleRadiusSearch}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold hover:scale-105 transition shadow-lg shadow-blue-600/20"
          >
            Search by Radius
          </button>

        </div>

      </div>

    </section>
  );
};

export default ArtistSearch;