import jwt from "jsonwebtoken"
import { blacklistModel } from "../model/blacklist.model.js"

async function authUser(req,res,next) {
    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token is not provided"
        })
    }

    const isTokenBlacklist=await blacklistModel.findOne({token})

    if(isTokenBlacklist){
        return res.status(401).json({
            message:"Token is invalid"
        })
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded

        next()
    }catch(e){
        return res.status(401).json({
            message:"Token is Invalid"
        })
    }
}

export {authUser}