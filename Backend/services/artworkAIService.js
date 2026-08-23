import { generateArtworkDescription } from "./geminiService.js";
import { createArtworkEmbedding } from "./aiEmbeddingService.js";

export const processArtworkAI = async (artwork) => {

  // 1. Generate AI description

  const aiDescription = await generateArtworkDescription({
    imageUrl: artwork.images[0].url,
    title: artwork.title,
    description: artwork.description,
    category: artwork.category,
    medium: artwork.medium,
    tags: artwork.tags,
  });

  if (!aiDescription) {
    throw new Error("AI failed to generate description.");
  }

  artwork.aiDescription = aiDescription;


  // 2. Create text for embedding

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

  artwork.embeddingStatus = "processing";

  await artwork.save();


  // 3. Generate embedding and store in FAISS

  const embeddingResult = await createArtworkEmbedding(
    artwork._id.toString(),
    embeddingText
  );


  // 4. Save FAISS information

  artwork.vectorId =
    embeddingResult.vectorPosition.toString();

  artwork.embeddingStatus = "completed";

  await artwork.save();


  return artwork;
};