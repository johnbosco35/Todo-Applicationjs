import Joi from "joi";

export const todoSchema = Joi.object({
    title: Joi.string().required().min(3).max(50),
    description: Joi.string().optional().max(255),
    dueDate: Joi.date().optional(),
    assigneeEmail: Joi.string().email().optional(),
})