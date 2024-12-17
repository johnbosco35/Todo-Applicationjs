import mongoose, { model } from "mongoose";
import { todo } from "../util/interfaces";

interface ITodo extends todo, mongoose.Document {}

const todoSchema = new mongoose.Schema<todo>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        completed: {
            type: Boolean,
            default: false,
        },  
    },
    {timestamps:true}
)

export default model("Todo", todoSchema);