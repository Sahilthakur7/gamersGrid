const mongoose = require('mongoose');
const Schema = Mongoose.Schema();

const imageSchema = new Schema({
    imageName: {
        type: String;
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});

mongoose.model('images',imageSchema);


