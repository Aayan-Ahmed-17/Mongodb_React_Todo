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

// const editTodo = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.json({ error: "Not a valid Id" });
//     }

//     try {
//         const todo = await Todos.findOneAndUpdate(
//             { _id: id },
//             {
//                 ...req.body,
//             },
//             {new: true}
//         );

//         if (!todo) {
//             return res.status(404).json({ error: "Todo not found!" });
//         }

//         res.json(todo);
//     } catch (error) {
//         res.status(500).json({
//             message: 'internal server error'
//         })
//     }

// }

const editTodo = async (req, res) => {
  const { id } = req.params;

  const edit = await Todos.findOneAndUpdate(
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

export { addTodo, getAllTodo, delTodo , editTodo};
