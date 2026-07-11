import Artwork from "../models/Artwork.js";
import uploadMultipleImages from "../utils/uploadMultipleImages.js";
import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";
// upload artwork
export const uploadArtwork = async (req, res) => {
    try {

        const {
            title,
            description,
            price,
            category,
            medium,
            width,
            height,
            unit,
            tags,
            stock,
        } = req.body;

        if (
            !title ||
            !description ||
            !price ||
            !category
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please upload at least one artwork image.",
            });
        }

        // Upload images to Cloudinary
        const uploadedImages = await uploadMultipleImages(
            req.files,
            "Kala/Artworks"
        );

        // Generate embedding text (later this goes to Gemini/OpenAI)
        const embeddingText = `
Title: ${title}
Description: ${description}
Category: ${category}
Medium: ${medium}
Tags: ${tags}
`;

        const artwork = await Artwork.create({

            artist: req.user._id,

            title,

            description,

            images: uploadedImages,

            price,

            category,

            medium,

            dimensions: {
                width,
                height,
                unit: unit || "cm",
            },

            tags: tags
                ? JSON.parse(tags)
                : [],

            stock: stock || 1,

            embeddingText,

            embeddingStatus: "pending",

        });

        return res.status(201).json({

            success: true,

            message: "Artwork Uploaded Successfully.",

            artwork,

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error.",

        });

    }
};

// get all artworks

export const getAllArtworks = async (req, res) => {

  try {

    const artworks = await Artwork.find()

      .populate("artist", "name profileImage averageRating")

      .sort({
        createdAt: -1,
      });

    return res.status(200).json({

      success: true,

      artworks,

    });

  }

  catch (error) {

    return res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};

//get single artwork

export const getArtworkById = async (req, res) => {

  try {

    const artwork = await Artwork.findById(req.params.id)

      .populate("artist");

    if (!artwork) {

      return res.status(404).json({

        success: false,

        message: "Artwork not found.",

      });

    }

    artwork.views += 1;

    await artwork.save();

    return res.status(200).json({

      success: true,

      artwork,

    });

  }

  catch (error) {

    return res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};

// get logged-in users artworks

export const getMyArtworks = async (req, res) => {

  try {

    const artworks = await Artwork.find({

      artist: req.user._id,

    }).sort({

      createdAt: -1,

    });

    return res.status(200).json({

      success: true,

      artworks,

    });

  }

  catch (error) {

    return res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};

// delete artwork

export const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found.",
      });
    }

    if (artwork.artist.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    // Delete all artwork images from Cloudinary
    for (const image of artwork.images) {
      if (image.public_id) {
        await cloudinary.uploader.destroy(image.public_id);
      }
    }

    // Later: Delete embedding from vector database
    // if (artwork.vectorId) {
    //     await pinecone.index(...).deleteOne(artwork.vectorId);
    // }

    // Delete artwork
    await artwork.deleteOne();

    // Update artist artwork count
    await User.findByIdAndUpdate(req.user._id, {
      $inc: { artworksCount: -1 },
    });

    return res.status(200).json({
      success: true,
      message: "Artwork deleted successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
//update artwork

export const updateArtwork = async (req, res) => {

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

    Object.assign(artwork, req.body);

    await artwork.save();
    await User.findByIdAndUpdate(req.user._id, {
      $inc: { artworksCount: 1 },
    });

    return res.status(200).json({

      success: true,

      message: "Artwork Updated.",

      artwork,

    });

  }

  catch (error) {

    return res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};