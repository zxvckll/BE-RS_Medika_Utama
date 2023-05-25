// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
dotenv.config();
await db.sync();
console.log("All models were synchronized successfully.");

// Init express
const app = express();
const port = 5000;
// use express json
app.use(express.json());
// use cors
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);




app.use(cookieParser());
app.use(express.json());

// Testing database connection
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// use router
app.use(Router);

app.get('/health',(req,res) => {
  res.header({"System-health": true})
  res.sendStatus(204)
})
// listen on port
app.listen(port, () => console.log("Server running "));
