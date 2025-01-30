import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clientRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
