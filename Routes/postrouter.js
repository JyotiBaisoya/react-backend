const express = require("express");
const { Postmodel } = require("../models/postmodel");

const postRouter = express.Router();


postRouter.post("/post/create",async(req,res)=>{
    const payload = req.body;
      try {
        const post = new Postmodel(payload);
        await post.save();
        res.send("Post has been added")
      } catch (error) {
         console.log(error);
         res.send({"error":error})
      }
})

postRouter.get("/post/allposts",async(req,res)=>{
    try {
        const posts = await Postmodel.find();
        res.send(posts)
    } catch (error) {
        console.log(error);
        res.send({"error":error})
    }
})

postRouter.delete("/post/:id",async(req,res)=>{
    const id = req.params.id
    try {
        await Postmodel.findByIdAndDelete({_id:id});
        res.send("post has been successfully deleted")
    } catch (error) {
       console.log(error);
       res.send({"error":error}) 
    }
})

postRouter.get("/post/sortbybudgetinc",async(req,res)=>{
       try {
        const posts = await Postmodel.find().sort({budget_per_person:1})
        res.send(posts)
       } catch (error) {
          console.log(error);
          res.send({"error":error})
       }
})
postRouter.get("/post/sortbybudgetdec",async(req,res)=>{
    try {
     const posts = await Postmodel.find().sort({budget_per_person:-1})
     res.send(posts)
    } catch (error) {
       console.log(error);
       res.send({"error":error})
    }
})

postRouter.get("/post/filterbydestination/:dest",async(req,res)=>{
    const destination = req.params.dest
    try {
        const post = await Postmodel.find({destination:destination});
        res.send(post)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

module.exports={postRouter}