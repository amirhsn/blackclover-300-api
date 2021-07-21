const apiData = require('./process');
'use strict';

exports.response = (res)=>{
     res.json(apiData);
     res.end();
    }
