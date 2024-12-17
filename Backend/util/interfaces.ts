import { Types } from "mongoose";

export interface user{
    name: string;
    email: string;
    password: string;
}

export interface todo {
    user: Types.ObjectId;
    title: string;
    description: string;
    completed: boolean;
}
