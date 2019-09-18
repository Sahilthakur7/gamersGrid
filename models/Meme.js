const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageData:{
        type: String,
        required: true
    }
});

const Meme = mongoose.model('Meme', MemeSchema);

module.exports = Meme;
