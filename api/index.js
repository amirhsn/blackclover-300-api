//Import all required package
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//automatically for app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES
//import routes
const getImage = require('./routes/routes');
//Get image
app.use('/api', getImage);

app.listen(4000);