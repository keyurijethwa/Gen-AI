import {userModel} from "../../model/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

async function registerUserCon(req,res){

    const {username,email,password}=req.body
    
    if(!username||!email||!password){
        return res.status(400).json({
            message: "username, email or password are missing"
        })
    }

    const isUserAlreadyExists=userModel.findOne({
        $or:[
            {username},{email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"Username or Email address already exists"
        })
    }

    const hash= await bcrypt.hash(password)

    const user=await userModel.create({
        username,
        email,
        password:hash
    })

    const token=jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })


}



export {registerUserCon}