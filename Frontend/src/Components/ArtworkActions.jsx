import { useState } from "react";
import {
  Heart,
  Share2,
  User,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const ArtworkActions = ({ artwork }) => {

  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);

  const handleLike = () => {

    // Later connect to backend

    setLiked(!liked);

  };

  const handleShare = async () => {

    const shareUrl = window.location.href;

    if (navigator.share) {

      try {

        await navigator.share({

          title: artwork.title,

          text: artwork.description,

          url: shareUrl,

        });

      }

      catch (err) {

        console.log(err);

      }

    }

    else {

      navigator.clipboard.writeText(shareUrl);

      alert("Artwork link copied to clipboard.");

    }

  };

  return (

    <div className="p-8 border-t border-gray-800">

      <div className="flex flex-col gap-4">

        {/* Like */}

        <button

          onClick={handleLike}

          className={`flex items-center justify-center gap-3 py-4 rounded-xl transition font-semibold ${
            liked
              ? "bg-red-600 text-white"
              : "border border-red-500 text-red-400 hover:bg-red-600 hover:text-white"
          }`}

        >

          <Heart
            size={20}
            fill={liked ? "white" : "none"}
          />

          {liked ? "Liked" : "Like Artwork"}

        </button>

        {/* View Artist */}

        <button

          onClick={() =>
            navigate(`/artist/${artwork.artist._id}`)
          }

          className="flex items-center justify-center gap-3 py-4 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition font-semibold"

        >

          <User size={20} />

          View Artist

        </button>

        {/* Share */}

        <button

          onClick={handleShare}

          className="flex items-center justify-center gap-3 py-4 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition font-semibold"

        >

          <Share2 size={20} />

          Share Artwork

        </button>

      </div>

    </div>

  );

};

export default ArtworkActions;