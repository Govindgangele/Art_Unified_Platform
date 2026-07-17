import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Artist from "../Pages/Artist";
import ArtistProfile from "../Pages/ArtistProfile";
import Artworks from "../pages/Artworks";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ArtworkDetails from "../Pages/ArtworkDetails";
import UploadArtwork from "../Pages/UploadArtwork";
// import Profile from "../pages/Profile";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/artist" element={<Artist />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />

        <Route path="/artworks" element={<Artworks />} />
        <Route
          path="/artwork/:id"
          element={<ArtworkDetails />}
        />
        <Route

          path="/upload-artwork"

          element={<UploadArtwork />}

        />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />



      </Route>



    </Routes>
  );
};

export default AppRoutes;