import { Router } from "express";
import { protect } from "../middleware/authMiddleWare";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../Controller/todoController";


 const router = Router();

router.use(protect);

router.get("/get-todos", getTodos);
router.post("/createTask", createTodo);
router.put("/updateTask/:id", updateTodo);
router.delete("/deleteTask/:id", deleteTodo);

export default router;