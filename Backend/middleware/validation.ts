import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";


export const validate = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const {error} = schema.validate(req.body, {abortEarly: false});
        if (error) {
            const messages = error.details.map((e) => e.message);
            return res.status(400).json({
                error: messages
            });
        }
    }
}