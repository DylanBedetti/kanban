require("dotenv").config();
const Sequelize = require("sequelize");

const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_PORT = process.env.POSTGRES_PORT;
const host = "127.0.0.1";

const DATABASE_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${host}:${POSTGRES_PORT}/${POSTGRES_DB}`;

// sequelize is the database object that is shared around
const sequelize = new Sequelize(DATABASE_URL, { logging: false });

console.log(sequelize);

module.exports = sequelize;
