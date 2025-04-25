const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  Track_Name: String,
  Artist_Name: String,
  Genre: String,
  BeatsPerMinute: Number,
  Energy: Number,
  Danceability: Number,
  LoudnessdB: Number,
  Liveness: Number,
  Valence: Number,
  Length: Number,
  Acousticness: Number,
  Speechiness: Number,
  Popularity: Number
}, { collection: 'music' });

module.exports = mongoose.model('Music', musicSchema);
