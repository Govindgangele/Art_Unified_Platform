import axios from "axios";

const AI_SERVICE_URL =
  process.env.AI_SERVICE_URL || "http://localhost:8000";

export const createArtworkEmbedding = async (artworkId, text) => {
  const response = await axios.post(
    `${AI_SERVICE_URL}/ai/embed`,
    {
      artworkId,
      text,
    }
  );

  return response.data;
};