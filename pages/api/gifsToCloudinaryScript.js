const cloudinary = require("cloudinary").v2;
const gifUrls = require("../../db.json");
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload images to Cloudinary and rename them with their IDs
const uploadGifs = async () => {
  const uploadGifs = [];

  for (const gif of gifUrls) {
    const id = gif.id;
    const gifUrl = gif.gifUrl;
    const publicId = `gif_image_${id}`;

    try {
      const uploadResult = await cloudinary.uploader.upload(gifUrl, {
        folder: "Exercises_Gif",
        public_id: publicId,
        overwrite: true,
        resource_type: "auto",
      });

      uploadGifs.push({
        id: id,
        gifUrl: uploadResult.secure_url,
        bodyPart: gif.bodyPart,
        equipment: gif.equipment,
        name: gif.name,
        target: gif.target,
      });

      console.log(`Image ${publicId} uploaded successfully.`);
    } catch (error) {
      console.error(`Error uploading image ${publicId}:`, error);
    }
  }

  return uploadGifs;
};

// Run the uploadGifs function
uploadGifs()
  .then((uploadGifs) => {
    // Create a new JSON file with the uploaded images
    // fs.writeFile('../../db_updated.json', JSON.stringify(uploadGifs, null, 2), (err) => {
    //     if (err) {
    //       console.error('Error writing JSON file:', err);
    //     } else {
    //       console.log('JSON file with uploaded images has been created!');
    //     }
    //   });
    console.log(JSON.stringify(uploadGifs));
  })
  .catch((error) => {
    console.error("Error uploading images:", error);
  });
