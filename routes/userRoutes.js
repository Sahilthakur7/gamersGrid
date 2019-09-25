const User = require('../models/User');

module.exports = app => {
    app.post('/api/register', async(req,res) => {
        const { email, password, username } = req.body;
        const user = new User({email,password,username});

        try{
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(500).send("Error in creating the user");
        }
    })
}

