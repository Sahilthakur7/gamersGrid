const mongoose = require('mongoose');

const Game = mongoose.model('games');

const create = async(gameObj) => {
    console.log(gameObj);
}
