import express from "express";
import todoRoutes from "./routes/todos.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
const app = express();

// dotenv.config();
app.use(express.json());

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGO DB connection failed !!! ", err);
//   });

// set routes in todoRoutes
app.listen(process.env.PORT || "3000", () => {
  console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
});
// app.use("/api/v1", todoRoutes);

// Home page route
app.get("/", (req, res) => {
  res.send("Home");
  console.log("Home");
});
