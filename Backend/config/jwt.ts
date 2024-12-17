import jwt from "jsonwebtoken"
import { environmentVariable } from "../env/enviroment"

export const generateToken = (id: string): String => {
    return jwt.sign({id}, environmentVariable.jwt_secret as string, {expiresIn: "1h"})
}