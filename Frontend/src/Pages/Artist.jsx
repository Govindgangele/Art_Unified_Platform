import ArtistSearch from "../Components/ArtistSearch";
import ArtistGrid from "../Components/ArtistGrid";

const Artists = () => {
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

        {/* Blue Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[180px]" />

        <div className="absolute -left-48 top-52 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="absolute -right-52 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

      </div>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 pt-16 text-center">

        <span className="text-blue-500 uppercase tracking-[5px] font-semibold">
          Discover Artists
        </span>

        <h1 className="text-6xl font-extrabold text-white mt-5 leading-tight">

          Find Amazing

          <span className="text-blue-500"> Artists </span>

          Around You

        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-6 leading-8">

          Browse hundreds of talented artists, explore their artwork,
          connect with creators, and discover unique masterpieces from
          across India.

        </p>

      </section>

      {/* Search */}

      <ArtistSearch />

      {/* Artists */}

      <ArtistGrid />

    </div>
  );
};

export default Artists;