const User = require('../models/User');
const jwt = require('jsonwebtoken');
const withAuth = require('./middlware');

const secret = 'lskdjfiosdfjoisjgoidifh29347839';

module.exports = app => {

    app.get('/api/secret',withAuth, (req,res) => {
        res.send("inside");
    });

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
        const { email , password } = this.body;

        try{
            const user = await User.findOne({email});
        }catch(err){
            console.log(err);
            return res.status(500).json({error: 'Some internal Error'});
        };

        if(!user){
            return res.status(401).json({error: 'User not found with this email'});
        }

        user.isCorrectPassword(password).then((same) => {
            if(same){
                const payload = email;
                const token = jwt.sign(payload, secret , {
                    expiresIn: '3h'
                });
                res.cookie('token', token, {httpOnly: true}).sendStatus(200);
            }
            else{
                return res.status(401).json({error: 'Incorrect password'});
            }

        }).catch((err) => {
            console.log(err);

        })

    })
}

