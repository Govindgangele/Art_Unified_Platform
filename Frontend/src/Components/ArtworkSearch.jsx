import { Search } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Portrait",
  "Sketch",
  "Digital",
  "Oil",
  "Acrylic",
  "Nature",
  "Landscape",
  "Abstract",
];

const ArtworkSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const handleSearch = () => {
    console.log({
      keyword,
      category: selectedCategory,
      sort: sortBy,
    });

    // Backend API later
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">

      <div className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8 shadow-xl">

        {/* Heading */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-white">
            Discover Artworks
          </h1>

          <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
            Browse unique paintings, sketches, digital art and handmade
            masterpieces created by talented artists.
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
              placeholder="Search artwork, artist or keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
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

        {/* Categories */}

        <div className="mt-10">

          <h2 className="text-lg font-semibold text-white mb-5">
            Categories
          </h2>

          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-[#111827] text-gray-400 border border-gray-700 hover:border-blue-500 hover:text-white"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* Sort */}

        <div className="mt-10 flex justify-end">

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#111827] border border-gray-700 rounded-xl px-5 py-3 text-white outline-none focus:border-blue-500"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Highest Price</option>
            <option>Lowest Price</option>
            <option>Most Popular</option>
          </select>

        </div>

      </div>

    </section>
  );
};

export default ArtworkSearch;