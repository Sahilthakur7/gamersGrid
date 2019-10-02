const mongoose = require('mongoose');

const User = mongoose.model('User');

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

    }

};
