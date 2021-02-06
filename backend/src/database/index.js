require("dotenv").config();
const Sequelize = require("sequelize");
// your credentials

const user = process.env.POSTGRES_USER;
const host = "127.0.0.1";
const database = process.env.POSTGRES_DATABASE;
const password = process.env.POSTGRES_PASSWORD;
const port = process.env.POSTGRES_PORT;

const DATABASE_URL = `postgres://${user}:${password}@${host}:${port}/${database}`;

const db = new Sequelize(DATABASE_URL);

module.exports = db;
