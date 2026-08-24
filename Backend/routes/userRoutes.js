import express from "express";
import {

    searchArtists,

} from "../Controllers/userController.js";
import { getArtists } from "../Controllers/userController.js";
import { getArtistProfile, getNearbyArtists } from "../Controllers/userController.js";
const router = express.Router();

router.get(
    "/nearby",
    getNearbyArtists
);
router.get("/artists", getArtists);
router.get(
    "/search",
    searchArtists
);
router.get("/:id", getArtistProfile);
export default router;