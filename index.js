const express = require('express');

const app=express();
require('./db/connect')
const Signup=require('./routes/Signup')
const Login=require('./routes/Login')
const Product =require('./routes/Product')
const Category =require('./routes/Category')
const cors=require('cors') //its help to connect the frontend and backend 
app.use(cors());  //its very important
app.use(express.json())
app.use('/api',Signup)
app.use('/api',Login)
app.use('/api',Product)
app.use('/api',Category)

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})