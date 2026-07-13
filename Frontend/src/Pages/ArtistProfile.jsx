import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../../Backend/api/axios";

import ProfileHeader from "../Components/ProfileHeader";
import ProfileStats from "../Components/ProfileStats";
import AboutArtist from "../Components/AboutArtist";
import ArtistArtworkGrid from "../Components/ArtistArtworkGrid";

const ArtistProfile = () => {

  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(null);
  const [artist, setArtist] = useState(null);

  const [artworks, setArtworks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchArtist = async () => {

      try {

        setLoading(true);

        const res = await api.get(`/users/${id}`);

        setArtist(res.data.artist);

        setArtworks(res.data.artworks);
        setCurrentUser(res.data.currentUser);

      } catch (err) {

        console.log(err);

        setError(
          err.response?.data?.message ||
          "Failed to load artist profile."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchArtist();

  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading Artist...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        {error}
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">
        Artist not found.
      </div>
    );
  }
  const handleDeleteArtwork = async (artworkId) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this artwork?"
  );

  if (!confirmDelete) return;

  try {

    await api.delete(`/artworks/${artworkId}`);

    setArtworks((prev) =>
      prev.filter(
        (artwork) => artwork._id !== artworkId
      )
    );

  } catch (error) {

    console.log(error);

    alert("Failed to delete artwork.");

  }

};
  return (

    <div className="relative min-h-screen">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg,#ffffff22 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[180px]" />

        <div className="absolute -left-48 top-52 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="absolute -right-52 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

      </div>

      <ProfileHeader
    artist={artist}
    currentUser={currentUser}
/>

      <ProfileStats artist={artist} />

      <AboutArtist artist={artist} />

      <ArtistArtworkGrid artworks={artworks}
      artist={artist}
      currentUser={currentUser} />
       onDelete={handleDeleteArtwork}
    </div>

  );

};

export default ArtistProfile;