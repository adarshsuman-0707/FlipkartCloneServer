const mongoose=require('mongoose')
let structure=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    contact:Number,
    password:String
})
let complete=mongoose.model("register",structure)
module.exports=complete