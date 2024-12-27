import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

const addTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description)
    return res.status(400).json({
      message: "title or description is required",
    });

  try {
    const todo = await Todos.create({
      title,
      description,
    });

    res.status(201).json({
      message: "todo added successfully",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

const getAllTodo = async (req, res) => {
  try {
    const todos = await Todos.find({});
    res.json({
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

function edit(req, res) {
  res.send("edit");
  console.log("edit");
}

function remove(req, res) {
  res.send("delete");
  console.log("delete");
}

export { addTodo, getAllTodo, remove, edit };
