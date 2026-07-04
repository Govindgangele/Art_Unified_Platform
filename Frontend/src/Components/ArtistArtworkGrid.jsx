import ArtistArtworkCard from "./ArtistArtworkCard";
import { ImagePlus } from "lucide-react";

const ArtistArtworkGrid = () => {

  // Dummy Data
  const artworks = [
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
      title: "Sunset Landscape",
      description:
        "Beautiful acrylic painting inspired by the evening sunset.",
      price: 4500,
      likes: 245,
      views: 1280,
      date: "10 Jul 2026",
    },
    {
      _id: "2",
      image:
        "https://images.unsplash.com/photo-1578301979108-0a6d8f3b5f45?w=800",
      title: "Abstract Dreams",
      description:
        "Modern abstract artwork with vibrant colors.",
      price: 6200,
      likes: 312,
      views: 1650,
      date: "18 Jun 2026",
    },
    {
      _id: "3",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      title: "Mountain View",
      description:
        "Oil painting of snow-covered mountains.",
      price: 5200,
      likes: 198,
      views: 900,
      date: "25 May 2026",
    },
    {
      _id: "4",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      title: "Nature Sketch",
      description:
        "Pencil sketch of a beautiful forest scene.",
      price: 1800,
      likes: 145,
      views: 780,
      date: "11 Apr 2026",
    },
    {
      _id: "5",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
      title: "Blue Ocean",
      description:
        "Watercolor painting representing ocean waves.",
      price: 3900,
      likes: 270,
      views: 1100,
      date: "05 Mar 2026",
    },
    {
      _id: "6",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      title: "Portrait Art",
      description:
        "Realistic charcoal portrait artwork.",
      price: 7000,
      likes: 420,
      views: 2100,
      date: "28 Feb 2026",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}

      <div className="flex flex-col md:flex-row justify-between md:items-center mb-10">

        <div>

          <h2 className="text-4xl font-bold text-white">
            Art Gallery
          </h2>

          <p className="text-gray-400 mt-2">
            Explore all artworks created by this artist.
          </p>

        </div>

        <button className="mt-5 md:mt-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition shadow-lg shadow-blue-600/30">

          <ImagePlus size={20} />

          Upload Artwork

        </button>

      </div>

      {/* Empty State */}

      {artworks.length === 0 ? (

        <div className="bg-[#0B1120] border border-dashed border-gray-700 rounded-3xl py-24 flex flex-col items-center">

          <ImagePlus
            className="text-blue-500"
            size={70}
          />

          <h2 className="text-3xl font-bold mt-6">
            No Artworks Yet
          </h2>

          <p className="text-gray-400 mt-3">
            Upload your first artwork and start showcasing your creativity.
          </p>

          <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition">

            Upload Artwork

          </button>

        </div>

      ) : (

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {artworks.map((artwork) => (

            <ArtistArtworkCard
              key={artwork._id}
              artwork={artwork}
            />

          ))}

        </div>

      )}

    </section>
  );
};

export default ArtistArtworkGrid;