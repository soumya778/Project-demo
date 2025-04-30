// models/Podcast.js
const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  feed_url: String,
  title: { type: String, required: true },
  description: String,
  summary: String,
  author: String,
  email: String,
  link: String,
  language: String,
  explicit: { type: Number, default: 0 },
  image: String,
  category: String,
  subcategory: String,
  created_at: { type: Date },
  last_build_date: { type: Date }
});

module.exports = mongoose.model('Podcast', podcastSchema);
