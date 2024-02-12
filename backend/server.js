const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.MONGODB_URL.replace(
  "<USERNAME>",
  process.env.USERNAME
).replace("<PASSWORD>", process.env.PASSWORD);

const PORT = process.env.PORT || 3064;

const serverListenToPort = () =>
  app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));

mongoose
  .connect(DB, { dbName: "todolisto" })
  .then(() => {
    console.log("DB connection successful!");
    serverListenToPort();
  })
  .catch((err) => {
    console.log("Error connecting to database!");
    console.log(err);
    console.log("Server will not start. Aborting...");
    process.exit(); // beende den node prozess (clean exit)
  });
