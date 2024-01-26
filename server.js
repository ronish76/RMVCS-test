const express = require("express");
const app= express();
const bodyParser= require("body-parser")


app.use(bodyParser.urlencoded({extended:true}))




const menuRoute= require('./routes/menuRoute')
app.use('/menu',menuRoute)

app.listen(5000,()=>{
  console.log("server started at 5000 port")
})