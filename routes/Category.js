
const express = require('express');
const router=express.Router()
let category=require('../model/category');

router.post('/categorie',async(req,res)=>{
    try{
        let catData = await new category(req.body);
        if(catData){
            await catData.send()
            res.send("Finall category was added ").status(200);
        }
    
    }
    catch(e){
        res.send("NOT RECIEVED ").status(304);
        console.log(e);
    }
})


router.get('/categories',async(req,res)=>{
    try{
        let getData= await category.find();
        if(!getData){
        res.send('not found any data').status(404)
        }
        else{
        res.send(getData).status(200)
        }
    }
    catch(e){
        res.send('not found any data')
    }

})
module.exports=router;