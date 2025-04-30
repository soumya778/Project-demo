const mongoose = require('mongoose');

const DatabookSchema = new mongoose.Schema({
  rank: Number,
  title: String,
  price: Number,
  rating: Number,
  author: String,
  year_of_publication: Number,
  genre: String,
  url: String,
});

module.exports = mongoose.model('Databook', DatabookSchema);
