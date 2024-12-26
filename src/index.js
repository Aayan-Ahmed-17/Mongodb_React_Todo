import express from "express";
import todoRoutes from "./routes/todos.routes.js";
const app = express();
const port = 3000;

app.use('/api/v1' , todoRoutes)

app.get("/", (req, res) => {
  res.send("Home")
  console.log("Home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
