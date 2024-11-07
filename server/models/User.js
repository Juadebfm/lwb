// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: function () {
        return this.authType === "local";
      },
    },
    profilePicture: {
      type: String,
      default: null,
    },
    age: {
      type: Number,
    },
    education: {
      type: String,
    },
    interests: [
      {
        type: String,
      },
    ],
    work: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      default: "student",
    },
    authType: {
      type: String,
      enum: ["local", "google"],
      required: true,
    },
    googleId: {
      type: String,
      sparse: true,
    },
    qualifications: [
      {
        type: String,
      },
    ],
    expertiseAreas: [
      {
        type: String,
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
