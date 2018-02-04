var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var cors=require('cors');
var app=express();

const poll=require('./routes/poll');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors);
app.use('/poll',poll);

app.listen(2000,function(){
    console.log("Server started...");
})