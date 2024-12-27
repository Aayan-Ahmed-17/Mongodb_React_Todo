import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

function add(req, res) {
  res.send("add")
  console.log("add");
}

function edit(req, res) {
  res.send("edit");
  console.log("edit");
}

function remove(req, res) {
  res.send("delete");
  console.log("delete");
}


export {add , remove, edit};
