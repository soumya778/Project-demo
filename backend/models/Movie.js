const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  Release_Date: String,
  Title: String,
  Overview: String,
  Popularity: Number,
  Vote_Count: Number,
  Vote_Average: Number,
  Original_Language: String,
  Genre: String,
  Poster_Url: String
});

module.exports = mongoose.model('Movie', MovieSchema);
