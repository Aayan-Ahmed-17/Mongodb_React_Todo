import express from "express";
import { addTodo, getAllTodo, delTodo } from "../controllers/todos.controllers.js";

const router = express.Router()


router.post('/todo' , addTodo)
router.get('/todo' , getAllTodo)
router.delete('/todo/:id' , delTodo)
// router.put('/todo/:id' , editTodo)
// router.get('/todo/:id' , getSingleTodo)

export default router;
