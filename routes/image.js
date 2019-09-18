const express = require('express');
const ImageRouter = express.Router();
const multer = require('multer');
const Meme = require('../models/Meme');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/');
    },

    filename: function(req,file,cb){
        cb(null, Date.now() + file.originalName);
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

ImageRouter.route("/uploadmulter").post(upload.single("imageData") , (req,res,next) => {
    console.log(req.body);

    const newMeme = new Meme({
        title: req.body.title,
        imageData: req.file.path
    });

    newMeme.save().then(res => {
        res.status(200).json({
            success: true,
            document: result
        })
    }).catch((err) => next(err));
});
