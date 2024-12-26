import express from "express";
import { add, edit, remove } from "../controllers/todos.controllers.js";

const router = express.Router();

router.get("/todo", (req, res) => {
  res.send("add");
  console.log("add");
});
// router.get('/todo' , getAllTodo)
// router.get('/todo/:id' , getSingleTodo)
// router.delete('/todo/:id' , remove)
// router.put('/todo/:id' , edit)
router.get("/edit", (req, res) => {
  res.send("edit");
  console.log("edit");
});
router.get("/remove", (req, res) => {
  res.send("delete");
  console.log("delete");
});

export default router;
