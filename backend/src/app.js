require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const User = require("./models/user");

const app = express();
const port = process.env.EXPRESS_PORT;

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
// app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send({ message: "endpoint working" });
});

app.get("/users", User.readAll);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
