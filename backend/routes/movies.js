const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// @route   GET /api/movies
// @desc    Fetch all or filtered movies
router.get('/', async (req, res) => {
  try {
    const query = req.query.q?.toLowerCase();
    const movies = query
      ? await Movie.find({
          $or: [
            { Title: { $regex: query, $options: 'i' } },
            { Genre: { $regex: query, $options: 'i' } }
          ]
        }).limit(6)
      : await Movie.find().limit(6);

    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
