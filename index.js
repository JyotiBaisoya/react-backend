const express= require("express");
const {connection}=require("./config/dbconnection")
const app = express();
const cors = require("cors");
const { postRouter } = require("./Routes/postrouter");
require("dotenv").config()


app.use(express.json());
app.use(cors());

app.use(postRouter)

app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.listen(process.env.port,async()=>{
    try {
      await connection 
      console.log("Connected to db") 
    } catch (error) {
        console.log(error)
    }
    console.log(`Running on port ${process.env.port}`)
});