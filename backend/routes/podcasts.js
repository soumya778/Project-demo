const express = require('express');
const router = express.Router();
const Podcast = require('../models/Podcast');

// @route   GET /api/podcasts
// @desc    Fetch all or filtered podcasts
router.get('/', async (req, res) => {
  try {
    const query = req.query.q?.toLowerCase();
    const podcasts = query
      ? await Podcast.find({
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { summary: { $regex: query, $options: 'i' } },
            { author: { $regex: query, $options: 'i' } },
            { category: { $regex: query, $options: 'i' } },
            { subcategory: { $regex: query, $options: 'i' } }
          ]
        }).limit(6)
      : await Podcast.find().limit(6);

    res.json(podcasts);
  } catch (err) {
    console.error('Error fetching podcasts:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
