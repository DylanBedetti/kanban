const DataTypes = require("sequelize");
const database = require("../database");
const User = require("./User");

const Board = database.define("board", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  backgroundImage: {
    type: DataTypes.STRING,
  },
  userOwner: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

module.exports = Board;
