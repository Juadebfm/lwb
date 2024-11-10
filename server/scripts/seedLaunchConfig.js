// scripts/seedLaunchConfig.js
const mongoose = require("mongoose");
const LaunchConfig = require("../models/LaunchConfig");
require("dotenv").config();

async function seedLaunchConfig() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Check if config already exists
    const existingConfig = await LaunchConfig.findOne({});

    if (!existingConfig) {
      // Create initial launch config
      const initialConfig = new LaunchConfig({
        launchDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        isLaunched: false,
        announcements: [],
      });

      await initialConfig.save();
      console.log("Launch config created successfully");
    } else {
      console.log("Launch config already exists");
    }

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding launch config:", error);
    process.exit(1);
  }
}

seedLaunchConfig();
