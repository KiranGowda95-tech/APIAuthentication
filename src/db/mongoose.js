const express = require("express");
const mongoose=require('mongoose')


const router = express.Router();

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Task=mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task=new Task({
    description:"Fucking stuffs",
    completed:false
})

task.save(task)


router.get("/", (req, res) => {
  res.send("from mongoose router");
});

module.exports = router;
