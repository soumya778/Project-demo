// routes/music.js
const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

// GET all music data
router.get('/', async (req, res) => {
  try {
    console.log('Fetching music data...');
    const allMusic = await Music.find().limit(16);
    console.log(allMusic);  // Logs the fetched data
    res.json(allMusic);
  } catch (error) {
    console.log('Error:', error);  // Log the error if something goes wrong
    res.status(500).json({ message: "Failed to fetch music data", error });
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const { artist } = req.query;

//     let filter = {};
//     if (artist) {
//       filter.Artist = { $regex: new RegExp(artist, 'i') }; // Case-insensitive
//     }

//     console.log("Filter being applied:", filter); // 👈 log for debugging

//     const songs = await Music.find(filter);
//     console.log("Songs found:", songs.length); // 👈 log how many

//     res.json(songs);
//   } catch (err) {
//     console.error('Error fetching music:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });





module.exports = router;
