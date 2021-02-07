const DataTypes = require("sequelize");
const database = require("../database");
const User = require("./User");
const List = require("./List");

const Card = database.define("card", {
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
  description: {
    type: DataTypes.STRING,
  },
  due_date: {
    type: DataTypes.DATE,
  },
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  lists_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: List,
      key: "id",
    },
  },
});

module.exports = Card;
