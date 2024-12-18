import { Router } from "express";
import { getAllUser, getOneUser, login, register } from "../Controller/authController";

 const router = Router();

router.post("/register", register);
router.get("/oneUser/:userID", getOneUser);
router.get("/allusers", getAllUser);
router.post("/login", login)

export default router;