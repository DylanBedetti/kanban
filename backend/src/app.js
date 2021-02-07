require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const sequelize = require("./database");
const insertFakeData = require("./database/fakeData");

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

// app.get("/users", User.readAll);

app.listen(port, async () => {
  console.log(`App listening at http://localhost:${port}`);

  // connecting to database
  try {
    await sequelize.authenticate();
    console.log("Postgres connection has been established successfully");
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
    await insertFakeData();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
