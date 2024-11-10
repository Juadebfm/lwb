// routes/supportAndLaunch.js (renamed from index.js)
const express = require("express");
const router = express.Router();
const passport = require("passport");
const supportController = require("../controllers/supportController");
const launchController = require("../controllers/LaunchController");

// Support Thread Routes
router.post(
  "/support/threads",
  passport.authenticate("jwt", { session: false }),
  supportController.createThread
);

router.get(
  "/support/threads",
  passport.authenticate("jwt", { session: false }),
  supportController.getThreads
);

router.post(
  "/support/threads/reply",
  passport.authenticate("jwt", { session: false }),
  supportController.replyToThread
);

// Launch Configuration Routes
router.get("/launch/countdown", launchController.getLaunchCountdown);

router.post(
  "/launch/date",
  passport.authenticate("jwt", { session: false }),
  launchController.setLaunchDate
);

router.post(
  "/launch/announcement",
  passport.authenticate("jwt", { session: false }),
  launchController.addAnnouncement
);

module.exports = router;
