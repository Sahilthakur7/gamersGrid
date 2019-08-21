const mongoose = require('mongoose');
const GamesController = require('../controllers/GamesController');

const Game = mongoose.model('games');

module.exports = app => {
    app.post('/api/games/create' , (req,res) => {
        const gameObj = Object.assign({},req.body);
        GamesController.create(gameObj)
    })
}
