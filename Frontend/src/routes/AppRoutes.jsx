import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
// import Artists from "../pages/Artists";
// import Artworks from "../pages/Artworks";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Profile from "../pages/Profile";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        {/* <Route path="/artists" element={<Artists />} />

        <Route path="/artworks" element={<Artworks />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} /> */}

      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
  );
};

export default AppRoutes;