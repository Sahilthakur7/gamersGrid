const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
require('./models/Game');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json())
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));

require('./routes/gameRoutes')(app);
require('./routes/userRoutes')(app);

const PORT = 5000;

app.listen(PORT , () => { console.log("started listening") });
