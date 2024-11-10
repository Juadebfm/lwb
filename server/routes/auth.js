// routes/auth.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { check } = require("express-validator");
const auth = require("../controllers/authController"); // Changed this line
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
router.post("/register", registerValidation, auth.register); // Changed to auth.register
router.post("/login", loginValidation, auth.login); // Changed to auth.login
router.put("/profile", authMiddleware, auth.updateProfile); // Changed to auth.updateProfile
router.put("/role", authMiddleware, auth.updateRole); // Changed to auth.updateRole

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  auth.googleAuthCallback // Changed to auth.googleAuthCallback
);

// Protected route example
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  auth.getMe // Changed to auth.getMe
);

module.exports = router;
