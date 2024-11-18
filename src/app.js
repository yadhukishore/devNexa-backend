const express = require("express");

const app = express();
let PORT = 7777;

app.use("/",(req,res)=>{
    res.send("Hello from server")
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})