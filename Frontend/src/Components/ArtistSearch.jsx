import { Search } from "lucide-react";
import { useState } from "react";

const ArtistSearch = ({ search,
    setSearch,
    onSearch, }) => {

  

  const handleSearch = () => {

    onSearch(search);

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

            Search talented artists from across India.

          </p>

        </div>

        {/* Search */}

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              placeholder="Search artist by name..."
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  handleSearch();

                }

              }}
              className="w-full bg-[#111827] border border-gray-700 rounded-xl py-4 pl-14 pr-4 text-white outline-none focus:border-blue-500 transition"
            />

          </div>

          <button

            onClick={handleSearch}

            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition text-white font-semibold shadow-lg shadow-blue-600/20"

          >

            Search

          </button>

        </div>

      </div>

    </section>

  );

};

export default ArtistSearch;