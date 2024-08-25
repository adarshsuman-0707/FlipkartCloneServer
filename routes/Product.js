const express = require('express');
const router=express.Router()
let product=require('../model/product');

router.post('/product',async(req,res)=>{
    try{
        let prod=await new product(req.body)
        await prod.save();
        res.send("Product Successfully stored")
    }
    catch(e){
        res.send("error")
    }
})
//get alll product 
router.get('/products',async(req,res)=>{
try{
    let products=await product.find();

    if(products){
        res.send(products)
    }
    else{
        res.send("product nhi mile")
    }
}
catch(e){
console.log(e);
}
})

router.get('/products/:id',async(req,res)=>{
    try{
    let uniquedata=await product.findById(req.params.id);
    if(uniquedata){
        res.send(uniquedata).status(208);
    }
    else{
        res.send("Not present")
    }
    }
    catch{
        
    }
    })

    router.patch('/products/:id',async(req,res)=>{
        try{
            let update=await product.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(update){
                res.send(update).status(208);
            }
            else{
                res.send("Not present")
            }
            }
        catch{
            
        }
        })

        router.delete('/products/:id',async(req,res)=>{
            try{
                let deletes=await product.findByIdAndDelete(req.params.id,req.body,{new:true});
               
                if(deletes){
                    res.send(deletes).status(208);
                }
                else{
                    res.send("Not present")
                }
                }
            catch{
                
            }
            })
module.exports=router;