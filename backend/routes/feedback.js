const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const { name, email, feedback, rating } = req.body;
    const newFeedback = new Feedback({ name, email, feedback, rating });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving feedback', error: err.message });
  }
});

module.exports = router;
