import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadToCloudinary = (file, folder) => {
  return new Promise((resolve, reject) => {

    if (!file) {
      return resolve(null);
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
      },

      (error, result) => {

        if (error) {
          reject(error);
        }

        resolve(result);

      }
    );

    streamifier.createReadStream(file.buffer).pipe(stream);

  });
};

export default uploadToCloudinary;