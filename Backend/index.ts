import express, { Application } from "express"
import { DBconnect } from "./config/db";
import { environmentVariable } from "./env/enviroment";


const app: Application = express();

const port: Number | any = process.env.PORT;

const server = app.listen(environmentVariable, () =>{
    console.log(`Server is running on port ${port}`);
    DBconnect()
})

process.on("unhandledRejection", (error: any) =>{
    console.log("unhandledRejection",error);
    process.exit(1);
});

process.on("uncaughtException", (reason:any)=>{
    console.log("uncaughtException",reason);

    server.close(() =>{
        process.exit(1);
    });
});