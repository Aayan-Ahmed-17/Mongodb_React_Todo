import express from "express";
import { add, edit, remove } from "../controllers/todos.controllers.js";

const router = express.Router();

router.get("/todo", add)
router.get("/edit", edit);
router.get("/remove", remove);

export default router;
