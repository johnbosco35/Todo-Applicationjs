import express, { Application } from "express"


const app: Application = express();

const port: Number = 5000;

const server = app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
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