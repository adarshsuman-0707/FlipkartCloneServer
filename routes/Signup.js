const express = require('express');

const router=express.Router();
const usermodels = require('../model/register');

const bcrypt = require('bcrypt');
router.post('/signup',async(req,res)=>{
    let {email}=req.body;
    
    let user=await usermodels.findOne({email})
    if(user){
        res.send("User already exist")
    }
    else{
        let {firstname,lastname,email,contact,password}=req.body;
        password=await bcrypt.hash(password,10)
        let newdata=new usermodels({firstname,lastname,email,contact,password})
        newdata.save();
        console.log(newdata);
        res.send("successfully registered")
    }
})
module.exports=router;