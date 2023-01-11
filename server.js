const express= require('express')

const app= express()

app.get('/api/main',function(req,res){
    console.log("sending data")
    res.send({"message":"hey"})
})

app.listen(5000,function(){
    console.log("server started")
})