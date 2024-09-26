const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getCategory: async (req, res) => {
    try {
      const posts = await Post.find({ category: req.params.theme });
      console.log(req.params.theme, posts);
      res.render("category.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post });
    } catch (err) {
      console.log(err);
    }
  },
};
