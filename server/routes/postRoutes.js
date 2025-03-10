import express from "express";
import * as dotenv from "dotenv";
import Post from "../mongodb/models/post.js";
import {v2 as cloudinary} from "cloudinary";

dotenv.config();

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) { 
    res.status(500).json({ success: false, message: error });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}); 

export default router;


