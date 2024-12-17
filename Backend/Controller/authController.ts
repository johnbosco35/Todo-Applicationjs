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

export const login = async (req:Request, res:Response) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })

    if (!user || ! (await bcrypt.compare(password, user.password))) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }
    
    res.json({
        token: generateToken(user.id)
    });
}

export const getAllUser = async (req:Request, res:Response) => {
    try {
        const allUser = await UserModel.find()

        res.status(200).json({
            message: "All users retrieved successfully",
            data: allUser,
        })
    } catch (error:any) {
        res.status(400).json({
            message: "Error retrieving all users",
        })
    }
}

export const getOneUser = async (req:Request, res:Response) =>{
    try {
        const {userID} = req.params

        const user = await UserModel.findById(userID)

        return res.status(200).json({
            message: "User retrieved successfully",
            data: user,
        })
    } catch (error:any) {
        res.status(400).json({
            message: "Error retrieving user",
            data: error.message,
        })
    }
}