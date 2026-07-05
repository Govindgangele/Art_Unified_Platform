import ArtworkCard from "./ArtworkCard";

const ArtworkGrid = () => {

  // Dummy Data (Replace with backend response)

  const artworks = [
    {
      _id: "1",
      title: "Sunset Landscape",
      description: "Beautiful acrylic painting inspired by nature.",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
      price: 4500,
      likes: 235,
      views: 1850,
      rating: 4.9,
      artist: {
        _id: "101",
        name: "Govind Gangele",
        profilePic: "",
        location: "Bhopal",
      },
    },
    {
      _id: "2",
      title: "Abstract Dreams",
      description: "Modern abstract artwork full of vibrant colors.",
      image:
        "https://images.unsplash.com/photo-1578301979108-0a6d8f3b5f45?w=800",
      price: 6200,
      likes: 325,
      views: 2100,
      rating: 4.8,
      artist: {
        _id: "102",
        name: "Rahul Sharma",
        profilePic: "",
        location: "Delhi",
      },
    },
    {
      _id: "3",
      title: "Mountain View",
      description: "Oil painting of snowy mountains during sunrise.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
      price: 5200,
      likes: 280,
      views: 1750,
      rating: 5.0,
      artist: {
        _id: "103",
        name: "Ananya Singh",
        profilePic: "",
        location: "Mumbai",
      },
    },
    {
      _id: "4",
      title: "Ocean Waves",
      description: "Watercolor painting representing ocean waves.",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
      price: 3800,
      likes: 198,
      views: 1450,
      rating: 4.7,
      artist: {
        _id: "104",
        name: "Aman Verma",
        profilePic: "",
        location: "Pune",
      },
    },
    {
      _id: "5",
      title: "Nature Sketch",
      description: "Pencil sketch of a peaceful forest.",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      price: 1800,
      likes: 142,
      views: 970,
      rating: 4.6,
      artist: {
        _id: "105",
        name: "Riya Patel",
        profilePic: "",
        location: "Indore",
      },
    },
    {
      _id: "6",
      title: "Royal Portrait",
      description: "Charcoal portrait artwork with realistic detailing.",
      image:
        "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=800",
      price: 7400,
      likes: 460,
      views: 2850,
      rating: 5.0,
      artist: {
        _id: "106",
        name: "Aryan Gupta",
        profilePic: "",
        location: "Jaipur",
      },
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h2 className="text-4xl font-bold text-white">
            Explore Artworks
          </h2>

          <p className="text-gray-400 mt-2">
            Discover unique artwork created by talented artists.
          </p>

        </div>

        <span className="text-blue-400 font-semibold">
          {artworks.length} Artworks
        </span>

      </div>

      {/* Empty State */}

      {artworks.length === 0 ? (

        <div className="bg-[#111827] border border-dashed border-gray-700 rounded-3xl py-24 text-center">

          <h2 className="text-3xl font-bold text-white">
            No Artworks Found
          </h2>

          <p className="text-gray-400 mt-3">
            Try searching with different keywords or categories.
          </p>

        </div>

      ) : (

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {artworks.map((artwork) => (

            <ArtworkCard
              key={artwork._id}
              artwork={artwork}
            />

          ))}

        </div>

      )}

    </section>
  );
};

export default ArtworkGrid;