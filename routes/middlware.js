const jwt = require('jsonwebtoken');
const secret = 'lskdjfiosdfjoisjgoidifh29347839';

const withAuth = function(req,res,next){
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token ;

    if(!token){
        res.status(401).send('Unauthorized!')
    }else{
        jwt.verify(token,secret,function(err,decoded){
            if(err){
                res.status(401).send('Unauthorized: Invalid TOken');
            }else{
                req.email = decoded.email;
                next();
            }
        })
    }
}

module.exports = withAuth;
