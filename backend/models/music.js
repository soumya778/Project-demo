// models/music.js
const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  Artist: String,
  Url_spotify: String,
  Track: String,
  Album: String,
  Album_type: String,
  Uri: String,
  Danceability: Number,
  Energy: Number,
  Key: Number,
  Loudness: Number,
  Speechiness: Number,
  Acousticness: Number,
  Instrumentalness: Number,
  Liveness: Number,
  Valence: Number,
  Tempo: Number,
  Duration_ms: Number,
  Url_youtube: String,
  Title: String,
  Channel: String,
  Views: Number,
  Likes: Number,
  Comments: Number,
  Description: String,
  Licensed: Boolean,
  official_video: Boolean,
  Stream: Number
});

module.exports = mongoose.model('Music', musicSchema);
