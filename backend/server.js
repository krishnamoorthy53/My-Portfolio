
const express = require("express")
const app = express()
const PORT = 3500


app.get("/",(req,res)=>{
     res.send("this is the ")
})


app.listen(PORT,(()=>{console.log("The Port is Running Successfully")}))