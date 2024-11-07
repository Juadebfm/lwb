// controllers/authController.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { validationResult } = require("express-validator");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({
      email,
      password,
      name,
      authType: "local",
    });

    await user.save();

    const token = generateToken(user);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email, authType: "local" });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.googleAuthCallback = async (req, res) => {
  try {
    const token = generateToken(req.user);
    res.redirect(`${process.env.CLIENT_URL}?token=${token}`);
  } catch (error) {
    console.error(error);
    res.redirect(`${process.env.CLIENT_URL}/login?error=auth_failed`);
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const {
      name,
      age,
      education,
      interests,
      work,
      state,
      country,
      qualifications,
      profilePicture,
    } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    // Update the user's profile
    user.name = name;
    user.age = age;
    user.education = education;
    user.interests = interests;
    user.work = work;
    user.state = state;
    user.country = country;
    user.qualifications = qualifications;
    user.profilePicture = profilePicture; // Update the profile picture URL

    // Save the updated user
    await user.save();

    // Return the updated user's profile
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const { userId, role: userRole } = req.user;
    const { role, expertiseAreas } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    // Only admins can update the role of other users
    if (userRole === "admin") {
      user.role = role;
      user.expertiseAreas = expertiseAreas;
    } else if (user.role === "instructor") {
      user.expertiseAreas = expertiseAreas; // Instructors can only update their own expertise areas
    } else {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Save the updated user
    await user.save();

    // Return the updated user's profile
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
