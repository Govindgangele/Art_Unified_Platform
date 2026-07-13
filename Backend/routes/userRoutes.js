import express from "express";

import { getArtists } from "../controllers/userController.js";

const router = express.Router();

router.get("/artists", getArtists);
router.get("/:id", getArtistProfile);
export default router;