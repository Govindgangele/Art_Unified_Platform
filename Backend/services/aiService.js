import axios from "axios";

const AI_SERVICE_URL =
  process.env.AI_SERVICE_URL || "http://localhost:8000";

export const searchArtworkAI = async (query, topK = 10) => {

  const response = await axios.post(
    `${AI_SERVICE_URL}/ai/search`,
    {
      query,
      top_k: topK,
    }
  );

  return response.data;
};