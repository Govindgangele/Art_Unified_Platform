import express from "express";

import upload from "../middleware/uploadMiddleware.js";

import {
  signup,
  login,
  logout,
} from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/signup",
  upload.single("profileImage"),
  signup
);

router.post(
  "/login",
  login
);

router.post(
  "/logout",
  logout
);

export default router;