import mongoose from "mongoose";
import { environmentVariable } from "../env/enviroment";

const URI: any = environmentVariable.mongodb_string;

export const DBconnect = () => {
    try {
        const connect = mongoose.connect(URI)
        console.log("DB is now connected");
    } catch (error) {
        console.log(error)
    }
}