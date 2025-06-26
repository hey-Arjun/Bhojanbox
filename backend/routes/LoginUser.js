const express = require('express');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = "thisissecrectvalueofbhojanbox"; // 🔒 Replace with environment variable in production

// POST /api/loginuser
router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Incorrect password" });

    // ✅ Create JWT token
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "1d" });

    // Success - send only safe data
    res.json({
      success: true,
      authToken: token,
      name: user.name,
      email: user.email
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router; 
