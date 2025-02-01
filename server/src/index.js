const express = require("express");
const cors = require("cors");
const clientRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
