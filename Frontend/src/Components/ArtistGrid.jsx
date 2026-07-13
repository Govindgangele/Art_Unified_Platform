import ArtistCard from "./ArtistCard";

const ArtistGrid = ({artists}) => {

    return(

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">

            {

                artists.map((artist)=>(

                    <ArtistCard

                        key={artist._id}

                        artist={artist}

                    />

                ))

            }

        </div>

    );

}
export default ArtistGrid;