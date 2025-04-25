const express = require('express');
const router = express.Router();
const Music = require('../models/music'); // Make sure this file exists

// @desc    Get all songs or search by track/artist/genre
// @route   GET /api/music
// @query   ?search=keyword
router.get('/', async (req, res) => {
  const searchQuery = req.query.search;

  let filter = {};
  if (searchQuery) {
    const regex = new RegExp(searchQuery, 'i'); // case-insensitive search
    filter = {
      $or: [
        { Track: regex },
        { Artist: regex },
        { Genre: regex }
      ]
    };
  }

  try {
    const songs = await Music.find(filter).limit(5); // limit to 5 for performance
    res.json(songs);
  } catch (err) {
    console.error('Error fetching music:', err);
    res.status(500).json({ error: 'Server error while fetching music data.' });
  }
});

module.exports = router;
