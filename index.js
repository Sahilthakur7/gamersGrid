const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

const PORT = 5000;

app.listen(PORT , () => { console.log("started listening") });
