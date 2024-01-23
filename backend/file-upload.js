const logger = require("morgan");
const express = require("express");
const cors = require("cors");
const multer = require("multer");

// const uploadMiddleware = multer();
const uploadMiddlewareWithDestination = multer({ dest: "./uploads" });

const app = express();

const OK = 200;
const INTERNAL_SERVER_ERROR = 500;

app.use(cors()); // Cors Policy
app.use(logger("dev")); // Ersatz für die untere Middleware mit schöneren log Anzeigen
// app.use((req, _, next) => {
//   console.log("New Request: ", req.method, req.url);
//   next();
// });

app.use(express.json()); // parse body of all incoming requests only JSON
// app.use(uploadMiddleware.single("profileImg")); // parse body of all Content-Type: multipart/form-data
// app.use(uploadMiddleware.single("pdfAttachment")); // parse body of all Content-Type: multipart/form-data

app.post(
  "/api/users/profile",
  // uploadMiddleware.single("profileImg"),
  uploadMiddlewareWithDestination.single("profileImg"),
  (req, res) => {
    // Der Handler soll einfach nur in der Konsole logen
    // Die Datei wird geladen, mehr soll er nicht tun, es wird nichts ausgegeben, mit dem man arbeiten kann.
    console.log(req.body);
    // const mimeType = req.file.mimetype.split("/").slice(-1).join();
    // req.file.filename = req.file.fieldname + "." + mimeType;
    // console.log(mimeType);
    console.log(req.file);
    res.status(200).json({});
  }
);

app.use((_, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

const PORT = 3065;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => console.log(`Server runs on ${HOST}:${PORT}`));
