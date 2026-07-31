import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // ===========================
    // Authentication
    // ===========================

    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      default: null, // Google users won't have a password
    },

    googleId: {
      type: String,
      default: null,
    },

    role: {
      type: String,
      enum: ["artist", "buyer", "admin"],
      default: "buyer",
    },

    // ===========================
    // Profile
    // ===========================

    profileImage: {
      url: {
        type: String,
        default: "",
      },
      public_id: {
        type: String,
        default: "",
      },
    },

    coverImage: {
      url: {
        type: String,
        default: "",
      },
      public_id: {
        type: String,
        default: "",
      },
    },

    bio: {
      type: String,
      default: "",
      maxlength: 1000,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    // ===========================
    // Address
    // ===========================

    address: {
      formattedAddress: {
        type: String,
        default: "",
      },

      city: {
        type: String,
        default: "",
      },

      state: {
        type: String,
        default: "",
      },

      country: {
        type: String,
        default: "India",
      },

      pincode: {
        type: String,
        default: "",
      },

      location: {
        type: {
          type: String,
          enum: ["Point"],
          default: "Point",
        },

        coordinates: {
          type: [Number], // [longitude, latitude]
          default: [0, 0],
        },
      },
    },

    // ===========================
    // Artist Information
    // ===========================

    specialization: [
      {
        type: String,
        trim: true,
      },
    ],

    experience: {
      type: Number,
      default: 0,
      min: 0,
    },

    socialLinks: {
      instagram: {
        type: String,
        default: "",
      },

      facebook: {
        type: String,
        default: "",
      },

      website: {
        type: String,
        default: "",
      },

      youtube: {
        type: String,
        default: "",
      },
    },

    // ===========================
    // Statistics
    // ===========================

    followersCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    followingCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    artworksCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalLikes: {
      type: Number,
      default: 0,
      min: 0,
    },

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },

    profileViews: {
      type: Number,
      default: 0,
      min: 0,
    },

    // ===========================
    // AI Search (Future)
    // ===========================

    searchProfile: {
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
      default: "",
    },

    // ===========================
    // Account
    // ===========================

    isVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// ===========================
// Indexes
// ===========================

// Radius Search
userSchema.index({
  "address.location": "2dsphere",
});

// Find artists quickly
userSchema.index({
  role: 1,
});

// Top-rated artists
userSchema.index({
  averageRating: -1,
});

// Most followed artists
userSchema.index({
  followersCount: -1,
});

// Most viewed profiles
userSchema.index({
  profileViews: -1,
});

const User = mongoose.model("User", userSchema);

export default User;