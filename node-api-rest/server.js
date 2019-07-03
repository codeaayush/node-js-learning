const express=require('express');
const Routes =require("./routes/post");
const app=express();
const morgan=require('morgan');
var bodyParser = require('body-parser')
const mongoose=require('mongoose');
const dotenv=require('dotenv')
// import routes all 
const PostRoutes =  require('./routes/post');
// import UserRoutes from './routes/user';
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(function(data){
    console.log('db connected')
});

//bringing in routes

//middleware
app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/**************Routes********** */

app.use("/post", PostRoutes);
// app.use("/user", UserRoutes);

const port=8080;
app.listen(port,()=>{
    console.log(`a Node js API is listening on Port: ${port}`)
});
/*
const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(function(data){
    console.log('db connected')
});

const app=express();
const appmodule = require("./module"); 

app.get('/calling', appmodule.getData);

app.get('/',(req,res)=>{
    res.send('hello i am in a express mode');
})
app.post('/', appmodule.postData);
 const port=process.env.PORT || 8080;
app.listen(port, function(){
    console.log('server started ...')
});

const gracefulStopServer = function () {
    // Wait 10 secs for existing connection to close and then exit.
    setTimeout(() => {
      process.exit(0);
    }, 1000);
  };
  
  process.on('uncaughtException', (err) => {
    process.exit(1);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    process.exit(1);
  });
  
  process.on('SIGINT', gracefulStopServer);
  process.on('SIGTERM', gracefulStopServer);
  */
 