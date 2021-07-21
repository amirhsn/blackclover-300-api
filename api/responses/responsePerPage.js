'use strict'

exports.response = (page,values,res)=>{
    var data = {
        'status' : 200,
        'page'  : page,
        'image' : values,
    }

    res.json(data);
    res.end();
}