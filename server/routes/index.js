// routes/index.js
const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const supportAndLaunchRoutes = require("./SupportAndLaunch"); // or whatever you named it

router.use("/auth", authRoutes);
router.use("/", supportAndLaunchRoutes);

module.exports = router;
