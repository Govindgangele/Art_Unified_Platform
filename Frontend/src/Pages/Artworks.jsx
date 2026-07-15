import { useEffect, useState } from "react";
import api from "../../../Backend/api/axios";

import ArtworkSearch from "../Components/ArtworkSearch";
import ArtworkGrid from "../Components/ArtworkGrid";

const Artwork = () => {

  const [artworks, setArtworks] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const [query, setQuery] = useState("");

  const fetchArtworks = async () => {

    if (loading || !hasMore) return;

    try {

      setLoading(true);

      const res = await api.get(
        `/artworks?page=${page}&limit=12`
      );

      setArtworks((prev) => [
        ...prev,
        ...res.data.artworks,
      ]);

      setHasMore(res.data.hasMore);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchArtworks();

  }, [page]);

  useEffect(() => {

    const handleScroll = () => {

      if (
        window.innerHeight +
          document.documentElement.scrollTop +
          200 >=
          document.documentElement.scrollHeight &&
        hasMore &&
        !loading
      ) {

        setPage((prev) => prev + 1);

      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, [loading, hasMore]);

  return (

    <div className="max-w-7xl mx-auto px-6 py-12">

      <ArtworkSearch
        query={query}
        setQuery={setQuery}
      />

      <ArtworkGrid artworks={artworks} />

      {loading && (

        <div className="text-center py-8 text-gray-400">

          Loading Artworks...

        </div>

      )}

    </div>

  );

};

export default Artwork;