import { Router } from "express";
import { protect } from "../middleware/authMiddleWare";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../Controller/todoController";


 const router = Router();

router.use(protect);

router.get("/get-todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;