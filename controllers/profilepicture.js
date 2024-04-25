const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/Users");
const ProfilePicture = require("../model/ProfilePicture");
const authToken = require("../middleware/tokenAuth");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

// Endpoint to upload profile picture
router.post(
  "/:userId/upload-profile-picture",
  authToken,
  upload.single("profilePicture"),
  async (req, res) => {
    const userId = req.params.userId;
    const imageUrl = req.file.path;

    try {
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if the user already has a profile picture
      let profilePicture = await ProfilePicture.findOne({ user: userId });

      if (profilePicture) {
        // If the user already has a profile picture, update the imageUrl
        profilePicture.imageUrl = imageUrl;
        await profilePicture.save();
        return res
          .status(200)
          .json({ message: "Profile picture updated successfully", imageUrl });
      } else {
        // If the user doesn't have a profile picture, create a new entry
        profilePicture = new ProfilePicture({
          user: userId,
          imageUrl,
        });
        await profilePicture.save();
        return res
          .status(201)
          .json({ message: "Profile picture uploaded successfully", imageUrl });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Failed to upload profile picture" });
    }
  }
);

module.exports = router;
