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
import {
  generateArtworkAI,
} from "../controllers/aiController.js";
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
router.post(
  "/:id/generate-ai",
  authMiddleware,
  roleMiddleware("artist"),
  generateArtworkAI
);

export default router;