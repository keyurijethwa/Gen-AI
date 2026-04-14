import express from "express"
import authController from "../../controller/auth.controller.js"

const authRouter=express.Router()

authRouter.post("/register",authController.registerUserCon)

authRouter.post("/login",authController.loginUserCon)

authRouter.get("/logout",authController.logoutUserCon)

authRouter.get("/get-User",authController.getUserCon)


export {authRouter}