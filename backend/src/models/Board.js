const DataTypes = require("sequelize");
const database = require("../database");
const User = require("./User");

const Board = database.define("board", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  backgroundImage: {
    type: DataTypes.STRING,
  },
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

module.exports = Board;
