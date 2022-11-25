const mongoose=require("mongoose")
const db=async()=>{
    try{
        const conn=await mongoose.connect(`mongodb+srv://user-123:tariq123@mini-mern-tut.fvmq7.mongodb.net/demo?retryWrites=true&w=majority`)
        console.log("mongodb connect")

    }catch(err){
        console.log(err)

    }
}
module.exports=db