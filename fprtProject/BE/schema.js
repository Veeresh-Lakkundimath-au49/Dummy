const mongoose = require("mongoose");
const { Schema } = require('mongoose')

let userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
    type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{

        type:String,
    
    }

})


let blogSchema=new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    content:[String],
    isPrivate:{
        type:Boolean
    },
    createdBy:{
        type:String
    },
    createdAt:{
        type: Date,
    default: Date.now()
    }
})




let userModel=mongoose.model('blog',userSchema);
let blogModel=mongoose.model('data',blogSchema)

module.exports={userModel,blogModel}