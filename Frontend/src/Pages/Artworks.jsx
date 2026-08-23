import { useEffect, useState } from "react";
import api from "../../../Backend/api/axios";

import ArtworkSearch from "../Components/ArtworkSearch";
import ArtworkGrid from "../Components/ArtworkGrid";

const Artworks = () => {

  const [artworks, setArtworks] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const [query, setQuery] = useState("");

  const [isAISearch, setIsAISearch] = useState(false);


  // ==========================================
  // NORMAL ARTWORK FETCH
  // ==========================================

  const fetchArtworks = async () => {

    if (loading || !hasMore) return;

    try {

      setLoading(true);

      const res = await api.get(
        `/artworks?page=${page}&limit=12`
      );

      if (page === 1) {

        setArtworks(res.data.artworks);

      } else {

        setArtworks((prev) => {

          const existing = new Set(
            prev.map((a) => a._id)
          );

          const newItems =
            res.data.artworks.filter(
              (a) => !existing.has(a._id)
            );

          return [...prev, ...newItems];

        });

      }

      setHasMore(res.data.hasMore);

    }

    catch (err) {

      console.log("ARTWORK FETCH ERROR:", err);

    }

    finally {

      setLoading(false);

    }

  };


  // ==========================================
  // AI SEMANTIC SEARCH
  // ==========================================

  const searchArtworksAI = async (searchQuery) => {

    if (!searchQuery.trim()) {

      return;

    }

    try {

      setLoading(true);

      setIsAISearch(true);

      const res = await api.get(
        `/artworks/ai-search?query=${encodeURIComponent(
          searchQuery
        )}`
      );

      setArtworks(res.data.artworks);

      setHasMore(false);

    }

    catch (err) {

      console.log(
        "AI ARTWORK SEARCH ERROR:",
        err
      );

      setArtworks([]);

    }

    finally {

      setLoading(false);

    }

  };


  // ==========================================
  // INITIAL / NORMAL PAGINATION
  // ==========================================

  useEffect(() => {

    if (!isAISearch && !query.trim()) {

      fetchArtworks();

    }

  }, [page]);


  // ==========================================
  // AI SEARCH WHEN USER STOPS TYPING
  // ==========================================

  // useEffect(() => {

  //   const timer = setTimeout(() => {

  //     if (query.trim()) {

  //       searchArtworksAI(query);

  //     }

  //     else {

  //       // Return to normal artwork browsing

  //       setIsAISearch(false);

  //       setPage(1);

  //       setHasMore(true);

  //       setArtworks([]);

  //     }

  //   }, 500);

  //   return () => clearTimeout(timer);

  // }, [query]);


  // ==========================================
  // INFINITE SCROLL
  // ==========================================

  useEffect(() => {

    const handleScroll = () => {

      // Don't paginate AI results

      if (isAISearch) return;

      if (loading || !hasMore) return;

      if (
        window.innerHeight +
          window.scrollY >=
        document.documentElement.offsetHeight - 300
      ) {

        setPage((prev) => prev + 1);

      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, [loading, hasMore, isAISearch]);


  return (

    <div className="max-w-7xl mx-auto px-6 py-12">

      <ArtworkSearch
        query={query}
        setQuery={setQuery}
         onSearch={searchArtworksAI}
      />


      {/* AI SEARCH INDICATOR */}

      {isAISearch && query.trim() && (

        <div className="mt-6 mb-4 text-sm text-blue-400">

          ✨ AI semantic search results for:

          <span className="text-white ml-1 font-medium">
            "{query}"
          </span>

        </div>

      )}


      <ArtworkGrid artworks={artworks} />


      {loading && (

        <div className="text-center py-8 text-gray-400">

          {isAISearch
            ? "Finding matching artworks..."
            : "Loading Artworks..."
          }

        </div>

      )}


      {!loading &&
        isAISearch &&
        artworks.length === 0 && (

          <div className="text-center py-12 text-gray-400">

            No artworks found matching your search.

          </div>

        )}

    </div>

  );

};

export default Artworks;