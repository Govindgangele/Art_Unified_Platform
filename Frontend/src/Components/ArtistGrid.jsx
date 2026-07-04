import ArtistCard from "./ArtistCard";

const ArtistGrid = () => {

  // Dummy Data (Replace with API response later)

  const artists = [
    {
      _id: "1",
      name: "Govind Gangele",
      email: "govind@gmail.com",
      location: "Bhopal",
      artworks: 18,
      rating: 4.9,
      profilePic: "",
    },
    {
      _id: "2",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      location: "Delhi",
      artworks: 25,
      rating: 4.8,
      profilePic: "",
    },
    {
      _id: "3",
      name: "Ananya Singh",
      email: "ananya@gmail.com",
      location: "Mumbai",
      artworks: 31,
      rating: 5.0,
      profilePic: "",
    },
    {
      _id: "4",
      name: "Aman Verma",
      email: "aman@gmail.com",
      location: "Pune",
      artworks: 12,
      rating: 4.7,
      profilePic: "",
    },
    {
      _id: "5",
      name: "Riya Patel",
      email: "riya@gmail.com",
      location: "Indore",
      artworks: 15,
      rating: 4.8,
      profilePic: "",
    },
    {
      _id: "6",
      name: "Aryan Gupta",
      email: "aryan@gmail.com",
      location: "Jaipur",
      artworks: 27,
      rating: 4.9,
      profilePic: "",
    },
    {
      _id: "7",
      name: "Priya Mehta",
      email: "priya@gmail.com",
      location: "Kolkata",
      artworks: 19,
      rating: 4.6,
      profilePic: "",
    },
    {
      _id: "8",
      name: "Neha Sharma",
      email: "neha@gmail.com",
      location: "Lucknow",
      artworks: 21,
      rating: 4.8,
      profilePic: "",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h2 className="text-4xl font-bold text-white">
            Featured Artists
          </h2>

          <p className="text-gray-400 mt-2">
            Explore talented artists from across India.
          </p>

        </div>

        <span className="text-blue-400 font-semibold">
          {artists.length} Artists
        </span>

      </div>

      {/* No Artists */}

      {artists.length === 0 ? (

        <div className="bg-[#111827] rounded-3xl border border-dashed border-gray-700 py-24 text-center">

          <h2 className="text-3xl font-bold text-white">
            No Artists Found
          </h2>

          <p className="text-gray-400 mt-3">
            Try searching with another name or radius.
          </p>

        </div>

      ) : (

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {artists.map((artist) => (

            <ArtistCard
              key={artist._id}
              artist={artist}
            />

          ))}

        </div>

      )}

    </section>
  );
};

export default ArtistGrid;