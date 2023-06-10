const mongoose = require("mongoose");

const postschema = mongoose.Schema({
     name:String,
     email:String,
     destination:String,
     no_of_travellers:Number,
     budget_per_person:Number
})

const Postmodel = mongoose.model("post",postschema)

module.exports = {Postmodel}