import express,{ Application, Request, Response, } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";



export const Mainapp = (app: Application) => {
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));


  
}
