const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Game');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json())

require('./routes/gameRoutes')(app);

const PORT = 5000;

app.listen(PORT , () => { console.log("started listening") });
