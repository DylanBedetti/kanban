require("dotenv").config();
const Sequelize = require("sequelize");

const user = process.env.POSTGRES_USER;
const host = "127.0.0.1";
const database = process.env.POSTGRES_DB;
const password = process.env.POSTGRES_PASSWORD;
const port = process.env.POSTGRES_PORT;

const DATABASE_URL = `postgres://${user}:${password}@${host}:${port}/${database}`;

const sequelize = new Sequelize(DATABASE_URL);

module.exports = sequelize;
