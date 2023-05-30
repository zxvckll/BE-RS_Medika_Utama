import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config();

const startServer = async () => {
  try {
    await db.sync();
    console.log("All models were synchronized successfully.");

    const app = express();
    const port = 5000;

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(
      cors({
        origin: ["http://localhost:5173"],
      })
    );

    app.use(cookieParser());
    app.use(express.json());

    try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

    app.use(Router);

    app.get("/health", (req, res) => {
      res.header({ "System-health": true });
      res.sendStatus(204);
    });
    const fibonacci = (n) => {
      if (n <= 1) {
        return n;
      }
      return fibonacci(n - 1) + fibonacci(n - 2);
    };

    app.post("/fibonacci", (req, res) => {
      const fibIndex = req.body.index;
      res.status(202).json({ index: fibIndex, result: "calculating..." });

      console.log("Fibonacci number:", fibonacci(fibIndex));
    });

    app.listen(port, () => console.log("Server running"));
  } catch (error) {
    console.error("An error occurred during server initialization:", error);
  }
};

startServer();
