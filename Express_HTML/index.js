import express from "express"
import fs from "fs"
const app= express();
app.get('/',(req,res)=>{
    fs.reaadFile('./pages/home.html','utf-8',(err,data)=>{
        if(err){
            res.status(500).send('Error Reading files');
            return;
        }else{
            res.send(data);
        }
    })
})
app.listen(PORT,()=>{
    console.log("server is running on http:")
})