// const express=require("express")
import express from "express"
import connectDB from "./lib/db.js"
import path from "path"

import { ENV } from "./lib/env.js"
const app=express()

const __dirname=path.resolve();

app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from api"})
})

if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    
}

const startServer=async()=>{
    try{
        await connectDB();
        app.listen(ENV.PORT,()=>{console.log("server is running port:",ENV.PORT)
    

})
    }catch(error){
        console.error("Error starting the server",error)

    }

}
startServer();