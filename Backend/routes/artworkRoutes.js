import express from "express";

import {
  uploadArtwork,
  getAllArtworks,
  getArtworkById,
  getMyArtworks,
  updateArtwork,
  deleteArtwork,
} from "../controllers/artworkController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAllArtworks);
router.get("/:id", getArtworkById);

// Protected Routes
router.post(
  "/upload",
  authMiddleware,
  roleMiddleware("artist"),
  upload.array("images", 5),
  uploadArtwork
);

router.get(
  "/my-artworks",
  authMiddleware,
  roleMiddleware("artist"),
  getMyArtworks
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("artist"),
  updateArtwork
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("artist"),
  deleteArtwork
);

export default router;