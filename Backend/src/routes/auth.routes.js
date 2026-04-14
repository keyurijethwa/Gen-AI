import express from "express"
import {registerUserCon} from "../controller/auth.controller.js"
import { loginUserCon } from "../controller/auth.controller.js"
import { logoutUserCon } from "../controller/auth.controller.js"
import { getUserCon } from "../controller/auth.controller.js"
import { authUser } from "../middleware/auth.middleware.js"

const authRouter=express.Router()

authRouter.post("/register",registerUserCon)

authRouter.post("/login",loginUserCon)

authRouter.get("/logout",logoutUserCon)

authRouter.get("/get-User",authUser,getUserCon)


export {authRouter}