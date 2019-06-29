var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log('server started');
  res.end('Hello World!');
});

server.listen(8080, function(){
    console.log('server started ')
});


app.put('/update/:id', function(req, res){
  var id = req.params.id;
  var payload = req.body;
  var newArray = [];
  if(global.student && global.student.length > 0) {
     var studentById = global.student.forEach(element => {
            if(element.id === id){
              element.name = payload.name;
              element.email = payload.email
              newArray.push({
                  id : id,
                  name : name,
                  email : email
              })
            } else if{
              newArray.push(element); 
            }
            else {
              res.json({ 'message' : 'no data available for update'});
            }
          }
        }
     });
     global.student = newArray;
     res.json(global.student);
  

})