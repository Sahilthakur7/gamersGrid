const mongoose = require('mongoose');
const GamesController = require('../controllers/GamesController');

const Game = mongoose.model('games');

module.exports = app => {
    app.post('/api/games/create' , (req,res) => {
        GamesController.create(req,res);
    })
}
