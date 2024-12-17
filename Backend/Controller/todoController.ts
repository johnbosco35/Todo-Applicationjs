import { Response } from "express";
import TodoModel from "../Model/TodoModel";


export const getTodos = async (req: any, res: Response) =>{
    // const todos = await TodoModel.find().populate('user', 'name email');
    try {
        const todos = await TodoModel.find({user: req.user.id});
        res.status(201).json({
            message:"Success",
            data: todos
        })
    } catch (error:any) {
        res.status(404).json({
            message: "Todos not found",
            error: error.message
        })
    }
}

export const createTodo = async (req: any, res: Response) => {
    try {
        const {title, description} = req.body;

        const newTodo = new TodoModel({user: req.user.id, title, description});
        await newTodo.save();
        res.status(201).json({
            message: "Todo created successfully",
            data: newTodo
        })
    } catch (error:any) {
        res.status(404).json({
            message: "Todos not found",
            error: error.message
        })
    }
}

export const updateTodo = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const updateTodo = await TodoModel.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).json({
            message: "Todo updated successfully",
            data: updateTodo,
        })
    } catch (error:any) {
        res.status(404).json({
            message: "Todos not found",
            error: error.message
        })
    }
}

export const deleteTodo = async (req: any, res: Response) => {
    try {
        const deletes = await TodoModel.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: "Todo deleted successfully",
            data: deletes,
        })
    } catch (error:any) {
        res.status(404).json({
            message: "Todos not found",
            error: error.message,
        })
    }
}