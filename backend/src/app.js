require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const sequelize = require("./database");
const insertFakeData = require("./database/fakeData");

const authRoutes = require("./routes/auth");
const boardRoutes = require("./routes/board");

const handleErrors = require("./middleware/handleErrors");

const app = express();
const port = process.env.EXPRESS_PORT;

// APPLICATION LEVEL MIDDLEWARE
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

// STATIC PATHS
app.use("/images", express.static(path.join(__dirname, "images")));

// ROUTE LEVEL MIDDLEWARE
app.use("/auth", authRoutes);
app.use("/board", boardRoutes);

app.get("/", (req, res) => {
  res.send({ message: "endpoint working" });
});

// ERROR HANDLING
// app.use((err, req, res, next) => {
//   console.log(err);
//   const status = err.statusCode || 500;
//   const message = err.message;
//   const data = err.data;
//   res.status(status).json({ message: message, data: data });
// });
app.use(handleErrors);

// STARTING SERVER
app.listen(port, async () => {
  console.log(`App listening at http://localhost:${port}`);

  // DATABASE
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
