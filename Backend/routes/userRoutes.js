import express from "express";
import {

    searchArtists,

} from "../controllers/userController.js";
import { getArtists } from "../controllers/userController.js";
import { getArtistProfile, getNearbyArtists } from "../controllers/userController.js";
const router = express.Router();

router.get("/artists", getArtists);
router.get("/:id", getArtistProfile);
router.get(
    "/nearby",
    getNearbyArtists
);
router.get(
    "/search",
    searchArtists
);
export default router;