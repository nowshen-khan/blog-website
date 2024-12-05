const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard!" });
});

module.exports = router;
