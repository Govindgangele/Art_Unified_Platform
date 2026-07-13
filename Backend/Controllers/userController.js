import User from "../models/User.js";
import Artwork from "../models/Artwork.js";
export const getArtists = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 12;

        const skip = (page - 1) * limit;

        const totalArtists = await User.countDocuments({
            role: "artist",
            isActive: true,
        });

        const artists = await User.find({
            role: "artist",
            isActive: true,
        })

        .select(
            "name email profileImage specialization averageRating followersCount artworksCount address.city address.state"
        )

        .sort({
            followersCount: -1,
        })

        .skip(skip)

        .limit(limit);

        return res.status(200).json({

            success: true,

            artists,

            currentPage: page,

            totalPages: Math.ceil(totalArtists / limit),

            totalArtists,

            hasMore: skip + artists.length < totalArtists,

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Server Error",

        });

    }

};

export const getArtistProfile = async (req, res) => {
  try {

    const artist = await User.findById(req.params.id)
      .select("-password -googleId");

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }

    const artworks = await Artwork.find({
      artist: artist._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      artist,
      artworks,
      currentUser:req.User._id
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};