import { useState } from "react";

const ArtworkImage = ({ artwork }) => {

  const [selectedImage, setSelectedImage] = useState(
    artwork.images?.[0]?.url
  );

  return (

    <div className="bg-black flex flex-col justify-center items-center p-6">

      {/* Main Image */}

      <div className="flex-1 flex items-center justify-center w-full overflow-hidden rounded-2xl">

        <img
          src={selectedImage}
          alt={artwork.title}
          className="max-h-[70vh] max-w-full object-contain transition duration-300 hover:scale-105"
        />

      </div>

      {/* Thumbnail Gallery */}

      {artwork.images?.length > 1 && (

        <div className="flex gap-4 mt-6 overflow-x-auto pb-2">

          {artwork.images.map((image, index) => (

            <img
              key={index}
              src={image.url}
              alt={`Artwork ${index + 1}`}
              onClick={() => setSelectedImage(image.url)}
              className={`w-20 h-20 rounded-xl object-cover cursor-pointer border-2 transition ${
                selectedImage === image.url
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-500"
              }`}
            />

          ))}

        </div>

      )}

    </div>

  );

};

export default ArtworkImage;