const Conversation = require("../models/Conversation");
const User = require("../models/User");

exports.createConversation = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user?.id; // Use optional chaining to handle null/undefined

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const adminId = (await User.findOne({ role: "admin" })).id;

    const conversation = new Conversation({
      user: userId,
      admin: adminId,
      messages: [{ sender: userId, content }],
    });

    await conversation.save();
    res.status(201).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getConversations = async (req, res) => {
  try {
    const userId = req.user.id;
    const conversations = await Conversation.find({
      $or: [{ user: userId }, { admin: userId }],
    }).sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.replyToConversation = async (req, res) => {
  try {
    const { conversationId, content } = req.body;
    const userId = req.user.id;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    if (
      conversation.admin.toString() !== userId.toString() &&
      conversation.user.toString() !== userId.toString()
    ) {
      return res.status(403).json({
        message: "You are not authorized to reply to this conversation",
      });
    }

    conversation.messages.push({
      sender: userId,
      content,
    });

    conversation.updatedAt = new Date();
    if (conversation.status === "closed") {
      conversation.status = "open";
    }

    await conversation.save();

    res.json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.closeConversation = async (req, res) => {
  try {
    const { conversationId } = req.body;
    const userId = req.user.id;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    if (conversation.admin.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "You are not authorized to close this conversation" });
    }

    conversation.status = "closed";
    await conversation.save();

    res.json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
