
const {Demo}=require("../Model/DemoModel")
exports.addDemo=async(req,res)=>{
    try{
    const demo= await  Demo.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        education:req.body.education,
        phone:req.body.phone,
        developer:req.body.developer,
    })
   return res.json({result:demo,count:demo.length})
    console.log(demo)
}catch(err){
    console.log(err)
    res.json({error:err.message})
}

}

exports.getDemo=async(req,res)=>{
    try{
    const demos=await Demo.find({})
   return  res.json({result:demos,count:demos.length})
    }catch(err){
        res.json({error:err.message})
    }
}

exports.DemoEdit=async(req,res)=>{
    try{
        const id =req.params.id
        const update= {
            first_name:req.body.first_name,
        last_name:req.body.last_name,
        education:req.body.education,
        phone:req.body.phone,
        developer:req.body.developer,
        }
    const demos=await Demo.findByIdAndUpdate({_id:id},update,{new:true})
    return res.json({result:demos,count:demos.length})
    }catch(err){
        res.json({error:err.message})
    }
}

exports.DemoDelete=async(req,res)=>{
    try{
        const id =req.params.id;
    const demos=await Demo.findByIdAndDelete({_id:id})
   return res.json({result: demos})
    }catch(err){
        res.json({error:err.message})
    }
}
