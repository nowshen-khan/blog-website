const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  
  try {
    const { title, description, image } = req.body;
    const newBlog = new Blog({ title, description, image });
    const savedBlog =await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({  message: "Failed to create blog", error: err.message });
  }
}

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id); // MongoDB থেকে ব্লগ খুঁজে বের করা
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateBlog = async (req, res) => {
    const { id } = req.params;
  const { title, description, image } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id,  { title, description, image }, {
      new: true,
    });
     if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createBlog, getBlogs, getBlog, updateBlog, deleteBlog };