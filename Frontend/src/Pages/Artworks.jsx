import ArtworkSearch from "../Components/ArtworkSearch";
import ArtworkGrid from "../Components/ArtworkGrid";

const Artworks = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg,#ffffff22 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[180px]" />

        <div className="absolute -left-48 top-52 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="absolute -right-52 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

      </div>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 pt-16 text-center">

        <span className="uppercase tracking-[5px] text-blue-500 font-semibold">
          Kala Gallery
        </span>

        <h1 className="text-6xl font-extrabold text-white mt-5 leading-tight">

          Discover Beautiful

          <span className="text-blue-500"> Artworks </span>

          From Amazing Artists

        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400 leading-8">

          Explore paintings, digital illustrations, sketches,
          portraits and handcrafted masterpieces from artists
          across India.

        </p>

      </section>

      {/* Search */}

      <ArtworkSearch />

      {/* Gallery */}

      <ArtworkGrid />

    </div>
  );
};

export default Artworks;