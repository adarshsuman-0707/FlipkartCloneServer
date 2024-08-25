const mongoose = require('mongoose');
const pro= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand :{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const compPro=mongoose.model('product',pro)
module.exports=compPro