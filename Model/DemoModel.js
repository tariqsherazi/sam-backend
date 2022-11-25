const mongoose=require("mongoose");

const demoSchema=new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    phone:{type:String},
    education:{type:String},
    developer:{type:String},

})
const Demo=  mongoose.model("Demo",demoSchema)
module.exports={Demo}