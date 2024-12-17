import mongoose from "mongoose";
import { user } from "../util/interfaces";
import { login } from "../Controller/authController";
import { router } from "../router/authRouter";


interface IUser extends user, mongoose.Document {}

const UserSchema = new mongoose.Schema<user>(
    {
        name: { 
            type: String, 
            required: true 
            },
            email: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true,
                match: [
                    /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                    "Please enter a valid email address.",
                  ],
            },
            password: {
                type: String,
                required: true,
                trim: true,

            }
            
    },

    {timestamps: true}
)

export default mongoose.model("User", UserSchema);
router.post("/login", login);
