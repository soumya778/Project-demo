const mongoose = require('mongoose');

const databookSchema = new mongoose.Schema({
    Rating: Number,
    Reviews: String, // Stored as "3,829"
    Book_title: String,
    Description: String,
    Number_Of_Pages: Number,
    Type: String,
    Price: Number
}, {
    timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Databook', databookSchema);
