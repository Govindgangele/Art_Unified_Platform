import ArtworkUploadForm from "../Components/ArtworkUploadForm";

const UploadArtwork = () => {

  return (

    <div className="min-h-screen py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-white">

            Upload Artwork

          </h1>

          <p className="mt-4 text-gray-400">

            Showcase your creativity and share your artwork with the world.

          </p>

        </div>

        <ArtworkUploadForm/>

      </div>

    </div>

  );

};

export default UploadArtwork;