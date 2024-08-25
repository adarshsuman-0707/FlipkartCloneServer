const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/flipkart").then(()=>console.log("connection successful with database")).catch((e)=>console.log("error"))
