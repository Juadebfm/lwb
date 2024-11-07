// routes/auth.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");

// Validation middleware
const registerValidation = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
];

const loginValidation = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
];

// Routes
router.post("/register", registerValidation, authController.register);
router.post("/login", loginValidation, authController.login);
router.put("/profile", authMiddleware, authController.updateProfile);
router.put("/role", authMiddleware, authController.updateRole);

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authController.googleAuthCallback
);

// Protected route example
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  authController.getMe
);

module.exports = router;
