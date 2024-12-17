import dotenv from "dotenv"


dotenv.config() 

export const environmentVariable = {
    port: process.env.PORT!,
    mongodb_string: process.env.MONGODB_URL! as any,
    jwt_secret: process.env.JWT_SECRET! as any,

}