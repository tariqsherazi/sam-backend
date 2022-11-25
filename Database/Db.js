const mongoose=require("mongoose")
const db=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://tariqsherazi:tariqsherazi@cluster0.e0dz7.mongodb.net/demo?retryWrites=true&w=majority")
        console.log("mongodb connect")

    }catch(err){
        console.log(err)

    }
}
module.exports=db