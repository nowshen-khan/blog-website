const express = require("express");
const router = express.Router();
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');

// Create a new blog
router.post("/", createBlog);

// Read all blogs
router.get("/", getBlogs);

// Update a blog
router.put("/:id", updateBlog);

// Delete a blog
router.delete("/:id", deleteBlog);

module.exports = router;
