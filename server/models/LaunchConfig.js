// models/LaunchConfig.js
const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const launchConfigSchema = new mongoose.Schema(
  {
    launchDate: {
      type: Date,
      required: true,
    },
    isLaunched: {
      type: Boolean,
      default: false,
    },
    announcements: [announcementSchema],
  },
  {
    timestamps: true,
  }
);

// Create and export the model
module.exports = mongoose.model("LaunchConfig", launchConfigSchema);
