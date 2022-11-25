const { addDemo, getDemo, DemoEdit, DemoDelete } = require("../Controllers/DemoController");

const router=require("express").Router();


router.post("/insert",addDemo)
router.get("/",getDemo)
router.put("/update/:id",DemoEdit)
router.delete("/delete/:id",DemoDelete)




module.exports=router