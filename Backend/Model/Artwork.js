import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema(
  {
    // Owner of artwork
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // Basic Information
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },

    // Images
    images: [
      {
        url: {
          type: String,
          required: true,
        },

        public_id: {
          type: String,
        },
      },
    ],

    // Price
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    // Category
    category: {
      type: String,
      enum: [
        "Portrait",
        "Sketch",
        "Digital Art",
        "Oil Painting",
        "Acrylic",
        "Watercolor",
        "Abstract",
        "Nature",
        "Landscape",
        "Calligraphy",
        "Mural",
        "Other",
      ],
      required: true,
    },

    // Medium
    medium: {
      type: String,
      trim: true,
    },

    // Dimensions
    dimensions: {
      width: Number,
      height: Number,
      unit: {
        type: String,
        default: "cm",
      },
    },

    // Optional Tags
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],

    // Availability
    isAvailable: {
      type: Boolean,
      default: true,
    },

    stock: {
      type: Number,
      default: 1,
    },

    // Likes
    likesCount: {
      type: Number,
      default: 0,
    },

    // Views
    views: {
      type: Number,
      default: 0,
    },

    // Average Rating
    averageRating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    /* ===========================
            AI SEARCH
       =========================== */

    embeddingText: {
      type: String,
      default: "",
    },

    embeddingStatus: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },

    vectorId: {
      type: String,
      default: null,
    },

    /* =========================== */

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Useful Indexes

artworkSchema.index({ title: "text", description: "text" });

artworkSchema.index({ artist: 1 });

artworkSchema.index({ artist: 1, createdAt: -1 });

artworkSchema.index({ category: 1 });

artworkSchema.index({ price: 1 });

const Artwork = mongoose.model("Artwork", artworkSchema);
export default Artwork;