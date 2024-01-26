
const { createMenu, findAllMenu } = require("../repository/menuRepository");

exports.addData=async(req,res,next)=>{
  const nameData=req.body.firstName;
  const priceData=req.body.price;
  try{
const menu=await createMenu(nameData,priceData)
res.json({
  message:"menu item added",
  item:menu
})

  }catch(error){
    console.log(error)
    res.status(500).json({
      error:"error occured"
    })
  }
}
exports.getData=async(req,res,next)=>{
  try{
    const menu=await findAllMenu();
    res.json({menu})

  }catch(error){
    console.log(error)
    res.status(500).json({
      error:"error occured"
    })
  }
}