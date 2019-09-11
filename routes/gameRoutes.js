const mongoose = require('mongoose');
const GamesController = require('../controllers/GamesController');

const Game = mongoose.model('games');

module.exports = app => {
    app.post('/api/games/create' , (req,res) => {
        GamesController.create(req,res);
    });

    app.get('/api/games', (req,res) => {
        GamesController.getAll(req,res);
    })
}
