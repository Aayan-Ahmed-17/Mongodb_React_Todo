import express from "express";
import { addTodo, edit, getAllTodo, remove } from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/todo", addTodo)
router.get("/todo", getAllTodo)
router.get("/edit", edit);
router.get("/remove", remove);

export default router;
