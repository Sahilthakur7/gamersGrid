const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = new mongoose.Schema({
    email: { type: String, required: true , unique: true },
    username: { type: String, required: true , unique: true},
    password: { type: String, require: true }
});

userSchema.pre('save',function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;
        bcrypt.hash(document.password,saltRounds, function(err,hashedPassword){
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        })
    }else{
        next();
    }
});

userSchema.methods.isCorrectPassword = async function(password){
    try{
        const res = await bcrypt.compare(password,this.password);
        if(res){
            return true;
        }else{
            return false;
        }
    }catch(err){
        return err;
    }
}


module.exports = mongoose.model('User', userSchema);




