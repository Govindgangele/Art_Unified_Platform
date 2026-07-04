import { useParams } from "react-router-dom";

import ProfileHeader from "../Components/ProfileHeader";
import ProfileStats from "../Components/ProfileStats";
import AboutArtist from "../Components/AboutArtist";
import ArtistArtworkGrid from "../Components/ArtistArtworkGrid";

const ArtistProfile = () => {
  const { id } = useParams();

  // Dummy Data (Replace with API response later)

  const artist = {
    _id: id,

    name: "Govind Gangele",

    email: "govind@gmail.com",

    location: "Bhopal, Madhya Pradesh",

    category: "Digital Artist",

    rating: 4.9,

    followers: 1256,

    artworks: 18,

    likes: "3.2K",

    views: "18K",

    memberSince: "January 2025",

    specialization: "Portrait, Sketch, Digital Art",

    about:
      "Hi, I'm Govind Gangele, a passionate artist who enjoys creating portraits, digital illustrations, sketches, wall paintings and acrylic artwork. My goal is to connect people with meaningful art and showcase creativity through Kala.",

    instagram: "https://instagram.com/",

    website: "https://portfolio.com",

    profilePic: "",

    coverImage: "",
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

      {/* Header */}

      <ProfileHeader artist={artist} />

      {/* Stats */}

      <ProfileStats artist={artist} />

      {/* About */}

      <AboutArtist artist={artist} />

      {/* Gallery */}

      <ArtistArtworkGrid />

    </div>
  );
};

export default ArtistProfile;