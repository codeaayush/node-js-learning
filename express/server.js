var express = require('express');

var app = express();

// HTTP GET /
app.get('/', function(req, res){
    res.json({'message' : 'message from / request'});
})

// HTTP GET /getcountries
app.get('/getcountries', function(req, res){
    var object = [
        {
            name : 'INDIA',
            cap : 'Delhi'
        },
        {
            name : 'INDIA',
            cap : 'Delhi'
        },
        {
            name : 'INDIA',
            cap : 'Delhi'
        }
    ]
    res.json(object);
})

app.listen(4000, function(){
    console.log('server started on PORT 4000');
});