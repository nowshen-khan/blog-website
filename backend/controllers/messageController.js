const Message = require('../models/Message');


exports.createMessage = async (req, res) => {
    const { name, email, message} = req.body;
  try {
    const newMessage = new Message({ name, email, message});
    await newMessage.save();
    res.status(201).send({ message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Failed to save Message", error });
  }
}

// Fetch all messages
exports.fetchMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
}

// Mark message as seen
exports.markAsSeen = async (req, res) => {
  try {
     const { id } = req.params;
   

    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { seen: true },
      { new: true } 
    );
     if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error("Error updating message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMessage = await Message.findByIdAndDelete(id);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.countSeenMessages = async (req, res) => {
  try {
    const count = await Message.aggregate([
      {
        $group: {
          _id: "$seen", // "seen" ফিল্ডের উপর ভিত্তি করে গ্রুপ করা
          count: { $sum: 1 } // প্রতিটি গ্রুপের জন্য কাউন্ট করা
        }
      }
    ]);
      const seenCount = count.find((item) => item._id === true)?.count || 0;
    const unseenCount = count.find((item) => item._id === false)?.count || 0;

    res.status(200).json({
      seen: seenCount,
      unseen: unseenCount,
    });
  } catch (error) {
    console.error("Error counting messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

