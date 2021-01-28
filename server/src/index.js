//import models
require('./Models/User');

//import library
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
//import routers
const authRoutes = require('./routes/authRoutes');



const requireAuth = require('./middleware/requireAuth')
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(authRoutes);


const mongobdUri = 'mongodb+srv://abolfazl:abolfazl@cluster0.r6vtg.mongodb.net/foodland?retryWrites=true&w=majority'
mongoose.connect(mongobdUri,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>[
    console.log('connect succsefuly')
])
mongoose.connection.on('error',(err)=>[
    console.log('connect failed',err)
])
app.get('/',requireAuth,(req,res)=>{
    res.send(`your email : ${req.user.email}`);
}) 

app.listen(4000, ()=> {
    console.log('listen to port 4000');
});
