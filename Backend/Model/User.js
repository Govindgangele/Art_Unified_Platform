
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
      default: null, // null for Google Sign-In users
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
    },

    // ===========================
    // Address & Location
    // ===========================

    address: {
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
      },
    ],

    experience: {
      type: Number,
      default: 0,
    },

    socialLinks: {
      instagram: String,
      facebook: String,
      website: String,
      youtube: String,
    },

    // ===========================
    // Statistics
    // ===========================

    followersCount: {
      type: Number,
      default: 0,
    },

    followingCount: {
      type: Number,
      default: 0,
    },

    artworksCount: {
      type: Number,
      default: 0,
    },

    totalLikes: {
      type: Number,
      default: 0,
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    profileViews: {
      type: Number,
      default: 0,
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
  },
  {
    timestamps: true,
  }
);

// ===========================
// Indexes
// ===========================

userSchema.index({
  "address.location": "2dsphere",
});

userSchema.index({
  role: 1,
});

userSchema.index({
  averageRating: -1,
});



const User=mongoose.model("User",userSchema);
export default User;