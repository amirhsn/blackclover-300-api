'use strict'

exports.response = (values,res)=>{
    var data = {
        'status' : 200,
        'result' : values,
    }

    res.json(data);
    res.end();
}