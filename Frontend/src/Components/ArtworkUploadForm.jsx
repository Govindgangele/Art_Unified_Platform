import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../../Backend/api/axios";

import ImageUploader from "./ImageUploader";
import TagInput from "./TagInput";

const ArtworkUploadForm = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);

  const [formData, setFormData] = useState({

    title: "",

    description: "",

    price: "",

    category: "Portrait",

    medium: "",

    width: "",

    height: "",

    unit: "cm",

    tags: [],

    isAvailable: true,

  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: type === "checkbox" ? checked : value,

    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);

      data.append("description", formData.description);

      data.append("price", formData.price);

      data.append("category", formData.category);

      data.append("medium", formData.medium);

      data.append("width", formData.width);

      data.append("height", formData.height);

      data.append("unit", formData.unit);

      data.append("tags", JSON.stringify(formData.tags));

      data.append("isAvailable", formData.isAvailable);

      images.forEach((image) => {

        data.append("images", image);

      });

      await api.post(
        "/artworks/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Artwork uploaded successfully.");

      navigate("/artworks");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
          "Upload failed."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8 space-y-8"
    >

      {/* Image Upload */}

      <ImageUploader
        images={images}
        setImages={setImages}
      />

      {/* Title */}

      <div>

        <label className="text-white block mb-2">

          Title

        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full bg-[#111827] border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-blue-500"
          required
        />

      </div>

      {/* Description */}

      <div>

        <label className="text-white block mb-2">

          Description

        </label>

        <textarea
          rows={6}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-[#111827] border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-blue-500 resize-none"
          required
        />

      </div>

      {/* Category + Medium */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="text-white block mb-2">

            Category

          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-[#111827] border border-gray-700 rounded-xl p-4 text-white"
          >

            <option>Portrait</option>

            <option>Sketch</option>

            <option>Digital Art</option>

            <option>Oil Painting</option>

            <option>Acrylic</option>

            <option>Watercolor</option>

            <option>Abstract</option>

            <option>Nature</option>

            <option>Landscape</option>

            <option>Calligraphy</option>

            <option>Mural</option>

            <option>Other</option>

          </select>

        </div>

        <div>

          <label className="text-white block mb-2">

            Medium

          </label>

          <input
            type="text"
            name="medium"
            value={formData.medium}
            onChange={handleChange}
            placeholder="Canvas, Paper, Digital..."
            className="w-full bg-[#111827] border border-gray-700 rounded-xl p-4 text-white"
          />

        </div>

      </div>

      {/* Price */}

      <div>

        <label className="text-white block mb-2">

          Price (₹)

        </label>

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full bg-[#111827] border border-gray-700 rounded-xl p-4 text-white"
          required
        />

      </div>

      {/* Dimensions */}

      <div className="grid grid-cols-3 gap-4">

        <input
          type="number"
          name="width"
          placeholder="Width"
          value={formData.width}
          onChange={handleChange}
          className="bg-[#111827] border border-gray-700 rounded-xl p-4 text-white"
        />

        <input
          type="number"
          name="height"
          placeholder="Height"
          value={formData.height}
          onChange={handleChange}
          className="bg-[#111827] border border-gray-700 rounded-xl p-4 text-white"
        />

        <select
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          className="bg-[#111827] border border-gray-700 rounded-xl p-4 text-white"
        >

          <option value="cm">cm</option>

          <option value="inch">inch</option>

        </select>

      </div>

      {/* Tags */}

      <TagInput
        tags={formData.tags}
        setTags={(tags) =>
          setFormData((prev) => ({
            ...prev,
            tags,
          }))
        }
      />

      {/* Available */}

      <label className="flex items-center gap-3 text-white">

        <input
          type="checkbox"
          name="isAvailable"
          checked={formData.isAvailable}
          onChange={handleChange}
        />

        Available for Sale

      </label>

      {/* Submit */}

      <button
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
      >

        {loading
          ? "Uploading..."
          : "Upload Artwork"}

      </button>

    </form>

  );

};

export default ArtworkUploadForm;