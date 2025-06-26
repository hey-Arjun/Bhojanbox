const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback'); // ✅ points to models, not routes

router.post('/feedback', async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const { name, email, message } = req.body;

    const newFeedback = new Feedback({
      name,
      email,
      message
    });

    await newFeedback.save();

    res.status(201).json({ success: true, message: "Feedback submitted successfully" });

  } catch (error) {
    console.error("❌ Feedback save error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

module.exports = router;
