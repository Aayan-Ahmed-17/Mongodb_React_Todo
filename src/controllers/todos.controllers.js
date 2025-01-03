import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

const addTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description)
    return res.status(400).json({
      message: "title or description is required",
    });


    // mongodb+srv://aayanahmedtejani:3X77iGNQRA4IITdU@cluster0.fx7qr.mongodb.net/
    //mongodb+srv://aayanahmedtejani:3X77iGNQRA4IITdU@cluster0.fx7qr.mongodb.net/todo


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

const editTodo = async (req, res) => {
  const { id } = req.params;

  const edit = await Todos.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  res.json({
    message: "todo updated",
    editTodo: edit,
  });
};

const delTodo = async (req, res) => {
  const { id } = req.params;
  const del = await Todos.findOneAndDelete({ _id: id });
  res.json({
    message: "todo deleted",
    deleteTodo: del,
  });
};

const getSingleTodo = async (req, res) => {
  const { id } = req.params;
  const singleTodo = await Todos.findById({ _id: id });
  res.json({
    message: "todo found",
    data: singleTodo
})
};

export { addTodo, getAllTodo, delTodo, editTodo , getSingleTodo};
