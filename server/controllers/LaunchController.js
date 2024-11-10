const LaunchConfig = require("../models/LaunchConfig");

exports.getLaunchCountdown = async (req, res) => {
  try {
    console.log("Attempting to find launch config...");
    const launchConfig = await LaunchConfig.findOne({});
    console.log("Launch config found:", launchConfig);

    if (!launchConfig) {
      return res.status(404).json({ message: "Launch date not configured" });
    }

    const now = new Date();
    const difference = launchConfig.launchDate - now;

    if (difference <= 0) {
      return res.json({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
        isLaunched: true,
      });
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((difference % (1000 * 60)) / 1000);

    res.json({
      days,
      hours,
      mins,
      secs,
      isLaunched: launchConfig.isLaunched,
    });
  } catch (error) {
    console.error("Error in getLaunchCountdown:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.setLaunchDate = async (req, res) => {
  try {
    const { launchDate } = req.body;

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    let config = await LaunchConfig.findOne({});

    if (!config) {
      config = new LaunchConfig({ launchDate: new Date(launchDate) });
    } else {
      config.launchDate = new Date(launchDate);
    }

    await config.save();
    res.json(config);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addAnnouncement = async (req, res) => {
  try {
    const { content } = req.body;

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    let config = await LaunchConfig.findOne({});

    if (!config) {
      return res
        .status(404)
        .json({ message: "Launch configuration not found" });
    }

    config.announcements.push({ content });
    await config.save();

    // Emit websocket event for real-time updates
    req.app.get("io").emit("new-announcement", { content });

    res.json(config);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
