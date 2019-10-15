const User = require('../models/User');
const jwt = require('jsonwebtoken');
const withAuth = require('./middlware');
const UsersController = require('../controllers/UsersController');

const secret = 'lskdjfiosdfjoisjgoidifh29347839';

module.exports = app => {

    app.get('/api/secret',withAuth, (req,res) => {
        res.send("inside");
    });

    app.get('/api/checkToken',withAuth, (req,res) => {
        res.status(200).send("this should print");
    })

    app.post('/api/register', async(req,res) => {
        const { email, password, username } = req.body;
        const user = new User({email,password,username});

        try{
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(500).send("Error in creating the user");
        }
    });

    app.post('/api/authenticate', async (req,res) => {
        UsersController.authenticate(req,res);
    });

    app.get('/api/logout', (req,res) => {
        res.clearCookie('token').send({message: 'You have been logged out!'});
    })
}

