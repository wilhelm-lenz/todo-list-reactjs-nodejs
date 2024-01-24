const logger = require("morgan");
const express = require("express");
const cors = require("cors");
const { todoRouter } = require("./src/routes");

const app = express();

app.use(cors()); // Cors Policy
app.use(logger("dev")); // Ersatz für die untere Middleware mit schöneren log Anzeigen
// app.use((req, _, next) => {
//   console.log("New Request: ", req.method, req.url);
//   next();
// });

app.use(express.json());

app.use("/api/todos", todoRouter);

app.use((_, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

const PORT = 3064;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => console.log(`Server runs on ${HOST}:${PORT}`));
