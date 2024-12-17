import { Types } from "mongoose";

export interface IUser{
    name: string;
    email: string;
    password: string;
}

export interface ITodo {
    user: Types.ObjectId;
    title: string;
    description: string;
    completed: boolean;
}