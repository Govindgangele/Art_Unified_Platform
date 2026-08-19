import Artwork from "../models/Artwork.js";
import { generateArtworkDescription } from "../services/geminiService.js";

export const generateArtworkAI = async (req, res) => {

  try {

    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found",
      });
    }

    const aiDescription = await generateArtworkDescription({

      imageUrl: artwork.images[0].url,

      title: artwork.title,

      description: artwork.description,

      category: artwork.category,

      medium: artwork.medium,

      tags: artwork.tags,

    });

    artwork.aiDescription = aiDescription;

    artwork.embeddingStatus = "pending";

    await artwork.save();

    return res.status(200).json({

      success: true,

      message: "AI description generated successfully",

      aiDescription,

    });

  }

  catch (error) {

    console.error("AI DESCRIPTION ERROR:", error);

    return res.status(500).json({

      success: false,

      message: "Failed to generate AI description",

      error: error.message,

    });

  }

};