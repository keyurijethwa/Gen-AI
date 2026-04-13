import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username is taken by someone"],
        required:true,
    },
    email:{
        type:String,
        unique:[true,"Email is taken by someone"],
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model("user",userSchema)

export {userModel}