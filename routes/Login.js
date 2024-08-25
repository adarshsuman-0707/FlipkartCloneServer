const express = require('express');
const router=express.Router();
const usermodels=require('../model/register')
const bcrypt=require('bcrypt')

router.post('/login',async(req,res)=>{

    let {email}=req.body;
    let user= await usermodels.findOne({email});

    if(!user){
        res.send("Nhi mila usser")
    }
    else{
        let{password}=req.body
        let result=await bcrypt.compare(password,user.password)
        if(result){
            res.send("login")
        }
        else{
            res.send("Invalid password")
        }
    }



})
module.exports=router