import bcrypt from "bcryptjs"
import { Request, Response } from "express"
import UserModel from "../Model/UserModel"
import { generateToken } from "../config/jwt"


export const register = async (req:Request, res:Response) => {
    const { name, email, password } = req.body
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user =  new UserModel({
            name,
            email,
            password: hashedPassword
        })
        await user.save()
        res.status(201).json({
            message: "User created successfully",
            token: generateToken(user.id)
        })
    } catch (error:any) {
        res.status(400).json({
            message: "Error registering user",
            error: error.message
        })
    }
}