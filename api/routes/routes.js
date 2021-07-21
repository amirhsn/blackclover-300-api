const express = require('express');
const routes = express.Router();
const getResponsePerPage = require('../responses/responsePerPage');
const getResponseAll = require('../responses/responseAll');
const errResponse = require('../responses/errorResponse');

const imageLink = ["https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/001.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/002.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/003.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/004.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/005.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/006.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/007.jpg"];

routes.get('/:id', (req,res)=>{
    let id = req.params.id;
    getResponsePerPage.response(
        id,
        imageLink[id-1],
        res
    );
});

module.exports = routes;
