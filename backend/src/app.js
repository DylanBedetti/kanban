require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT;

// application level middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

// error handling
app.use((err, req, res, next) => {
  console.log(err);
  if (!res.headersSent) {
    res.status(500).send(err.message);
  }
});

// static paths
app.use("/images", express.static(path.join(__dirname, "images")));

// route level middleware
app.get("/hello", (req, res, next) => {
  res.send("hellllo");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
