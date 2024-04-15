const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const connectDb = require("./config/db");
const app = express();

app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

// connectDb();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Namma Farm Server</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
