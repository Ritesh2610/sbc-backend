import mongoose from "mongoose"
import express from "express"
const app=express()
const connect_db=()=>{
  mongoose.connect("mongodb://127.0.0.1:27017/sbc")
  .then(()=>{
    app.listen(5000,()=>console.log("Server are Running on 5000"))
  })
  .catch((err)=>console.log(`server not connected: ${err}`))
}

export default connect_db;
