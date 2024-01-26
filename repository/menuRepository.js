const db=require("../models");

exports.createMenu=async(firstName,price)=>{
  return await db.Menu.create({
    firstName:firstName,
    price:price
  })

}


exports.findAllMenu=async ()=>{
  return await db.Menu.findAll()
}