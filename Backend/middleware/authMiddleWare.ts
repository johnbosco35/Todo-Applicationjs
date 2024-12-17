import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";
import { environmentVariable } from "../env/enviroment";
import UserModel from "../Model/UserModel";


interface AuthRequest extends Request {
    user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized, no token provided" });
    };

    try {
        const decoded = jwt.verify(token, environmentVariable.jwt_secret as string) as {id: string};
        req.user = await UserModel.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized, invalid token" });
    }
};