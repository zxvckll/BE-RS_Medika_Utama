import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config();

const startServer = async () => {
  try {

    const app = express();
    const port = 8080;

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(
      cors({
        origin: ["http://localhost:5173"],
      })
    );
    app.use(cookieParser());
    app.use(express.json());
    app.use(Router);


    app.listen(port, () => console.log("Server running"));
  } catch (error) {
    console.error("An error occurred during server initialization:", error);
  }
};

startServer();
