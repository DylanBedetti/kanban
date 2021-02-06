require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { Pool, Client } = require("pg");

const app = express();
const ex_port = process.env.EXPRESS_PORT;

const user = process.env.POSTGRES_USER;
const host = "127.0.0.1";
const database = process.env.POSTGRES_DATABASE;
const password = process.env.POSTGRES_PASSWORD;
const pg_port = process.env.POSTGRES_PORT;

// database
const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: pg_port,
});

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

app.listen(ex_port, () => {
  console.log(`Example app listening at http://localhost:${ex_port}`);
});
