const SupportThread = require("../models/SupportThread");
const User = require("../models/User");

exports.createThread = async (req, res) => {
  try {
    const { content, category } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const adminId = (await User.findOne({ role: "admin" })).id;

    const thread = new SupportThread({
      user: userId,
      admin: adminId,
      category,
      messages: [{ sender: userId, content }],
    });

    await thread.save();

    // Emit websocket event for real-time updates
    req.app.get("io").emit("new-thread", thread);

    res.status(201).json(thread);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getThreads = async (req, res) => {
  try {
    const userId = req.user.id;
    const { status, category } = req.query;

    const query = {
      $or: [{ user: userId }, { admin: userId }],
    };

    if (status) query.status = status;
    if (category) query.category = category;

    const threads = await SupportThread.find(query)
      .sort({ updatedAt: -1 })
      .populate("user", "name email")
      .populate("admin", "name email");

    res.json(threads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.replyToThread = async (req, res) => {
  try {
    const { threadId, content } = req.body;
    const userId = req.user.id;

    const thread = await SupportThread.findById(threadId);

    if (!thread) {
      return res.status(404).json({ message: "Thread not found" });
    }

    if (
      thread.admin.toString() !== userId.toString() &&
      thread.user.toString() !== userId.toString()
    ) {
      return res.status(403).json({
        message: "You are not authorized to reply to this thread",
      });
    }

    thread.messages.push({
      sender: userId,
      content,
    });

    thread.updatedAt = new Date();
    if (thread.status === "closed") {
      thread.status = "open";
    }

    await thread.save();

    // Emit websocket event for real-time updates
    req.app.get("io").emit("thread-reply", {
      threadId: thread._id,
      message: thread.messages[thread.messages.length - 1],
    });

    res.json(thread);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
