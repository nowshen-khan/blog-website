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
  const limit = parseInt(req.query.limit) || 0; 
    try {
        let blogs;
        if (limit > 0) {
            blogs = await Blog.find().limit(limit).lean(); 
        } else {
            blogs = await Blog.find();
        }
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error });
    }
}


const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id); 
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