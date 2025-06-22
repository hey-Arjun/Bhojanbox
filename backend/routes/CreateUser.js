const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post("/createuser", [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password', 'Incorrect password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.address, // ✅ Match frontend key
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
