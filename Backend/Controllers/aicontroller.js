import Artwork from "../models/Artwork.js";
import { generateArtworkDescription } from "../services/geminiService.js";

export const generateArtworkAI = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found.",
      });
    }

    // Only the artist who owns the artwork can generate its AI description
    if (
      artwork.artist.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    // Mark as processing
    artwork.embeddingStatus = "processing";
    await artwork.save();

    const AIDescription = await generateArtworkDescription({
      imageUrl: artwork.images[0].url,
      title: artwork.title,
      description: artwork.description,
      category: artwork.category,
      medium: artwork.medium,
      tags: artwork.tags,
    });

    if (!AIDescription) {
      artwork.embeddingStatus = "failed";
      await artwork.save();

      return res.status(500).json({
        success: false,
        message: "AI failed to generate description.",
      });
    }

    // Save AI generated description
    artwork.aiDescription = AIDescription;

    // For now, keep this pending because
    // we haven't generated the vector yet.
    artwork.embeddingStatus = "pending";

    await artwork.save();

    return res.status(200).json({
      success: true,
      message: "AI description generated successfully.",
      AIDescription: artwork.AIDescription,
      artwork,
    });

  } catch (error) {
    console.error("AI DESCRIPTION ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate AI description.",
    });
  }
};