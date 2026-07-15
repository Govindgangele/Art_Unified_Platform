import ArtworkCard from "./ArtworkCard";

const ArtworkGrid = ({ artworks }) => {

  if (artworks.length === 0) {

    return (

      <div className="flex justify-center items-center py-32">

        <h2 className="text-2xl text-gray-400">

          No artworks found.

        </h2>

      </div>

    );

  }

  return (

    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {artworks.map((artwork) => (

        <ArtworkCard
          key={artwork._id}
          artwork={artwork}
        />

      ))}

    </div>

  );

};

export default ArtworkGrid;