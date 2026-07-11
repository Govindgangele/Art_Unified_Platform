import uploadToCloudinary from "./uploadToCloudinary.js";

const uploadMultipleImages = async (
  files,
  folder
) => {

  const uploadedImages = [];

  for (const file of files) {

    const image = await uploadToCloudinary(
      file,
      folder
    );

    uploadedImages.push({
      url: image.secure_url,
      public_id: image.public_id,
    });

  }

  return uploadedImages;
};

export default uploadMultipleImages;