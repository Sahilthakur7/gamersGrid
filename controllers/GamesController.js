const mongoose = require('mongoose');

const Game = mongoose.model('games');

module.exports = {
    async create(req,res) {
        const gameObj = Object.assign({},req.body);

        Game.create(gameObj).then(game => {
            res.send(game);
        })
            .catch(err => {
                console.log("error caused it not getting saved" , err);
                res.status(400).send(err);
            });
    }
}
