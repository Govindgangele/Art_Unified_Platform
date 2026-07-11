import mongoose from "mongoose";

const artworkLikeSchema = new mongoose.Schema(
  {
    artwork: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artwork",
      required: true,
      index: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// One user can like an artwork only once
artworkLikeSchema.index(
  {
    artwork: 1,
    user: 1,
  },
  {
    unique: true,
  }
);

// Speed up queries
artworkLikeSchema.index({
  artwork: 1,
});

artworkLikeSchema.index({
  user: 1,
});

const ArtworkLike = mongoose.model("ArtworkLike", artworkLikeSchema);

export default ArtworkLike;