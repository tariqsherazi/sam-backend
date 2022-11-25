const mongoose=require("mongoose")
const db=async()=>{
    try{
        const conn=await mongoose.connect("mongodb://localhost/demo")
        console.log("mongodb connect")

    }catch(err){
        console.log(err)

    }
}
module.exports=db