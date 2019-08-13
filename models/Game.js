const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    platforms: [String],
    genre: String
});

mongoose.model('games',gameSchema);
