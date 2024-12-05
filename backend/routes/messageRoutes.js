const {createMessage, fetchMessages, markAsSeen, deleteMessage, countSeenMessages} = require("../controllers/messageController");
const express = require("express");
const router = express.Router();


router.post("/", createMessage);
router.get("/", fetchMessages);
router.put("/:id", markAsSeen);
router.delete("/:id", deleteMessage);
router.get("/count", countSeenMessages);

module.exports = router;