const DataTypes = require("sequelize");
const database = require("../database");
const User = require("./User");
const Board = require("./Board");

const List = database.define("list", {
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
  title: {
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
  boards_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Board,
      key: "id",
    },
  },
});

module.exports = List;
