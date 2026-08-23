import Artwork from "../models/Artwork.js";
import { generateArtworkDescription } from "../services/geminiService.js";
import { createArtworkEmbedding } from "../services/aiEmbeddingService.js";

export const generateArtworkAI = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found.",
      });
    }

    if (
      artwork.artist.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    // ==============================
    // 1. Generate AI Description
    // ==============================

    artwork.embeddingStatus = "processing";
    await artwork.save();

    const aiDescription = await generateArtworkDescription({
      imageUrl: artwork.images[0].url,
      title: artwork.title,
      description: artwork.description,
      category: artwork.category,
      medium: artwork.medium,
      tags: artwork.tags,
    });

    if (!aiDescription) {
      artwork.embeddingStatus = "failed";
      await artwork.save();

      return res.status(500).json({
        success: false,
        message: "AI failed to generate description.",
      });
    }

    artwork.aiDescription = aiDescription;

    // ==============================
    // 2. Create Embedding Text
    // ==============================

    const embeddingText = `
Title: ${artwork.title}

AI Description:
${artwork.aiDescription}

Category:
${artwork.category}

Medium:
${artwork.medium || "Not specified"}

Tags:
${artwork.tags?.join(", ") || "None"}
`;

    artwork.embeddingText = embeddingText;

    await artwork.save();

    // ==============================
    // 3. Generate Embedding + FAISS
    // ==============================

    const embeddingResult =
      await createArtworkEmbedding(
        artwork._id.toString(),
        embeddingText
      );

    // ==============================
    // 4. Save Vector Information
    // ==============================

    artwork.vectorId =
      embeddingResult.vectorPosition.toString();

    artwork.embeddingStatus = "completed";

    await artwork.save();

    return res.status(200).json({
      success: true,
      message:
        "AI description and embedding generated successfully.",

      aiDescription: artwork.aiDescription,

      vectorId: artwork.vectorId,

      embeddingStatus: artwork.embeddingStatus,

      artwork,
    });

  } catch (error) {

    console.error(
      "AI DESCRIPTION / EMBEDDING ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to generate AI description and embedding.",
    });
  }
};