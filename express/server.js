
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