// routes/music.js
const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

// GET all music data
router.get('/', async (req, res) => {
  try {
    console.log('Fetching music data...');
    const allMusic = await Music.find().limit(6);
    console.log(allMusic);  // Logs the fetched data
    res.json(allMusic);
  } catch (error) {
    console.log('Error:', error);  // Log the error if something goes wrong
    res.status(500).json({ message: "Failed to fetch music data", error });
  }
});

module.exports = router;
