const express = require('express');
const router = express.Router();
const Databook = require('../models/Databook');

// GET /api/databooks
router.get('/', async (req, res) => {
  try {
    const books = await Databook.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
