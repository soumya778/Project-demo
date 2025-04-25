// routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /api/books?search=query
router.get('/', async (req, res) => {
  try {
    const search = req.query.search || '';
    const books = await Book.find({
      title: { $regex: search, $options: 'i' }
    });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
