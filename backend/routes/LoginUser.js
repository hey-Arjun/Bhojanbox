const express = require('express');
const router = express.Router();
const User = require("../models/User");       // Import User model
const bcrypt = require("bcryptjs");           // For comparing hashed passwords
const jwt = require("jsonwebtoken");          // For generating JWT tokens

const jwtSecret = "thisissecrectvalueofbhojanbox"; // 🔐 Store in .env in production

// @route   POST /api/loginuser
// @desc    Login user and return token + user info
router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;

  try {
    // ✅ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // ✅ Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // ✅ Generate JWT token
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "1d" });

    // ✅ Send back success with safe user info
    return res.json({
      success: true,
      authToken: token,
      name: user.name,
      email: user.email
    });

  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
