const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');
const secret = 'lskdjfiosdfjoisjgoidifh29347839';

module.exports = {

    async authenticate(req,res){
        const { email , password } = req.body;

        let user;
        try{
            user = await User.findOne({email});
        }catch(err){
            console.log(err);
            return res.status(500).json({error: 'Some internal Error'});
        };

        if(!user){
            return res.status(401).json({error: "User not found with this email"});
        }

        user.isCorrectPassword(password).then((same) => {
            if(same){
                console.log('sending the cookie');
                const payload = { email, "iat": Date.now() };
                const token = jwt.sign(payload, secret , { expiresIn: '1d'
                });
                res.cookie('token', token, {httpOnly: false}).sendStatus(200);
            }
            else{
                return res.status(401).json({error: "Incorrect password"});
            }

        }).catch((err) => {
            console.log(err);

        })

    }

};
