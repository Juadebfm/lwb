const express = require("express");
const router = express.Router();
const passport = require("passport");
const conversationController = require("../controllers/conversationController");

router.post(
  "/conversations",
  passport.authenticate("jwt", { session: false }),
  conversationController.createConversation
);

router.get(
  "/conversations",
  passport.authenticate("jwt", { session: false }),
  conversationController.getConversations
);

router.post(
  "/conversations/reply",
  passport.authenticate("jwt", { session: false }),
  conversationController.replyToConversation
);

router.post(
  "/conversations/close",
  passport.authenticate("jwt", { session: false }),
  conversationController.closeConversation
);

module.exports = router;
