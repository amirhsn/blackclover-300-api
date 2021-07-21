//Import all required package
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//automatically for app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES
const getImage = require('./routes/routes')
app.use('/api/',getImage);

app.listen(443);