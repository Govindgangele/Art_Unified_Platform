import ArtistSearch from "../Components/ArtistSearch";
import ArtistGrid from "../Components/ArtistGrid";
import { useState, useEffect } from "react";
import RadiusSearch from "../Components/RadiusSearch";
import api from "../../../Backend/api/axios";
const Artists = () => {
  const [artists, setArtists] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const [search, setSearch] = useState("");

  const [radius, setRadius] = useState("");
  const handleRadiusSearch = async (
    position,
    radius
  ) => {

    try {

      const res = await api.get(

        `/users/nearby?lat=${position.lat}&lng=${position.lng}&radius=${radius}&page=1&limit=12`

      );

      setArtists(res.data.artists);

      setHasMore(res.data.hasMore);

      setPage(1);

    }

    catch (err) {

      console.log(err);

    }

  };

  const fetchArtists = async () => {

    if (loading || !hasMore) return;

    try {

      setLoading(true);

      const res = await api.get(
        `/users/artists?page=${page}&limit=12`
      );

      setArtists(prev => [
        ...prev,
        ...res.data.artists
      ]);

      setHasMore(res.data.hasMore);

    }

    catch (err) {

      console.log(err);

    }

    finally {

      setLoading(false);

    }

  }
  const handleArtistSearch = async (query) => {

    if (!query.trim()) {

      setPage(1);
      setArtists([]);
      setHasMore(true);

      fetchArtists(1);

      return;

    }

    try {

      setLoading(true);

      const res = await api.get(

        `/users/search?q=${query}&page=1&limit=12`

      );

      setArtists(res.data.artists);

      setHasMore(res.data.hasMore);

      setPage(1);

    }

    catch (err) {

      console.log(err);

    }

    finally {

      setLoading(false);

    }

  };
  useEffect(() => {

    fetchArtists();

  }, [page]);
  useEffect(() => {

    const handleScroll = () => {

      if (

        window.innerHeight +

        document.documentElement.scrollTop + 200

        >=

        document.documentElement.scrollHeight

        &&

        hasMore

        &&

        !loading

      ) {

        setPage(prev => prev + 1);

      }

    }

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
  useEffect(() => {

    const timer = setTimeout(() => {

      handleArtistSearch(search);

    }, 500);

    return () => clearTimeout(timer);

  }, [search]);
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg,#ffffff22 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Blue Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[180px]" />

        <div className="absolute -left-48 top-52 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="absolute -right-52 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

      </div>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 pt-16 text-center">

        <span className="text-blue-500 uppercase tracking-[5px] font-semibold">
          Discover Artists
        </span>

        <h1 className="text-6xl font-extrabold text-white mt-5 leading-tight">

          Find Amazing

          <span className="text-blue-500"> Artists </span>

          Around You

        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-6 leading-8">

          Browse hundreds of talented artists, explore their artwork,
          connect with creators, and discover unique masterpieces from
          across India.

        </p>

      </section>

      {/* Search */}

      <ArtistSearch

        search={search}

        setSearch={setSearch}

        onSearch={handleArtistSearch}

      />
      <RadiusSearch
        onSearch={handleRadiusSearch}
      />

      <ArtistGrid artists={artists} />

      {
        loading &&

        <p className="text-center">

          Loading...

        </p>
      }

    </div>
  );
};

export default Artists;