const DataTypes = require("sequelize");
const database = require("../database");
const User = require("./User");
const Card = require("./Card");

const Comment = database.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  cards_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Card,
      key: "id",
    },
  },
});

module.exports = Comment;
