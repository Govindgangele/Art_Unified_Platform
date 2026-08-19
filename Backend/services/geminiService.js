import { GoogleGenAI } from "@google/genai";
import axios from "axios";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateArtworkDescription = async ({
  imageUrl,
  title,
  description,
  category,
  medium,
  tags,
}) => {
  try {
    // Download artwork image from Cloudinary
    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    const imageBuffer = Buffer.from(imageResponse.data);

    const mimeType =
      imageResponse.headers["content-type"] || "image/jpeg";

    const prompt = `
You are an expert art curator and visual art analyst.

Analyze the artwork image together with the artist-provided information.

The resulting description will be used for semantic artwork search.
A buyer may search using natural language such as:
"peaceful village painting"
"portrait with dark background"
"colorful digital artwork"
"traditional Indian art"
"minimalist artwork with blue tones"

ARTWORK INFORMATION:

Title: ${title}

Artist Description:
${description}

Category:
${category}

Medium:
${medium || "Not specified"}

Tags:
${tags?.join(", ") || "None"}

Analyze the image carefully.

Describe:

- Main subjects and objects
- Visual appearance
- Setting/environment
- Colors and dominant palette
- Lighting
- Artistic style
- Mood and emotions
- Composition
- Themes and concepts
- Important visual details
- Natural search concepts a buyer might use

Do not invent details that cannot reasonably be inferred from the image
or artist-provided information.

Return one rich, detailed paragraph suitable for semantic search.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",

      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
            {
              inlineData: {
                mimeType,
                data: imageBuffer.toString("base64"),
              },
            },
          ],
        },
      ],
    });

    return response.text?.trim() || "";

  } catch (error) {
    console.error(
      "Gemini artwork description error:",
      error
    );

    throw error;
  }
};