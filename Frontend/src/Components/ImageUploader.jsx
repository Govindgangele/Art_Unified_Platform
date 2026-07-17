import { ImagePlus, X } from "lucide-react";

const ImageUploader = ({ images, setImages }) => {

  const handleImageChange = (e) => {

    const files = Array.from(e.target.files);

    if (images.length + files.length > 5) {

      alert("You can upload a maximum of 5 images.");

      return;

    }

    setImages((prev) => [...prev, ...files]);

  };

  const removeImage = (index) => {

    setImages(images.filter((_, i) => i !== index));

  };

  return (

    <div>

      <label className="block text-white font-medium mb-4">

        Artwork Images

      </label>

      {/* Upload Box */}

      <label className="flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-blue-500 rounded-2xl cursor-pointer hover:bg-[#111827] transition">

        <ImagePlus
          size={50}
          className="text-blue-400"
        />

        <p className="mt-4 text-gray-300">

          Click to upload artwork images

        </p>

        <p className="text-gray-500 text-sm mt-2">

          Maximum 5 images

        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

      </label>

      {/* Preview */}

      {images.length > 0 && (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">

          {images.map((image, index) => (

            <div
              key={index}
              className="relative group"
            >

              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-full h-36 rounded-xl object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-600 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
              >

                <X
                  size={18}
                  className="text-white"
                />

              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

export default ImageUploader;