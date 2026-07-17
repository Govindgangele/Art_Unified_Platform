import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { X } from "lucide-react";

import api from "../../../Backend/api/axios";

import ArtworkImage from "../Components/ArtworkImage";
import ArtworkInfo from "../Components/ArtworkInfo";
import ArtworkActions from "../Components/ArtworkActions";

const ArtworkDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [artwork, setArtwork] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchArtwork = async () => {

      try {

        const res = await api.get(`/artworks/${id}`);

        setArtwork(res.data.artwork);

      }

      catch(err){

        console.log(err);

      }

      finally{

        setLoading(false);

      }

    };

    fetchArtwork();

  },[id]);

  if(loading){

    return(

      <div className="fixed inset-0 bg-black/80 flex items-center justify-center">

        Loading...

      </div>

    );

  }

  return (

    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">

      <div className="relative bg-[#0B1120] rounded-3xl overflow-hidden max-w-7xl w-full max-h-[95vh]">

        {/* Close */}

        <button

          onClick={()=>navigate(-1)}

          className="absolute top-5 right-5 z-50 bg-black/50 p-2 rounded-full hover:bg-red-500 transition"

        >

          <X/>

        </button>

        <div className="grid lg:grid-cols-[2fr_1fr] h-[90vh]">

          <ArtworkImage artwork={artwork}/>

          <div className="overflow-y-auto">

            <ArtworkInfo artwork={artwork}/>

            <ArtworkActions artwork={artwork}/>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ArtworkDetails;