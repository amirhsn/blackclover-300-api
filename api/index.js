//Import all required package
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const getResponsePerPage = require('./responses/responsePerPage');

const imageLink = ["https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/001.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/002.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/003.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/004.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/005.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/006.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/007.jpg"];

//automatically for app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES
app.get('/api/:id', (req,res)=>{
    let id = req.params.id;
    getResponsePerPage.response(
        id,
        imageLink[id-1],
        res
    );
});

app.listen(4000);