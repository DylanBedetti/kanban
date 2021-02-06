const Sequelize = require("sequelize");
const database = require("../database");

const user = database.define(
  "users",
  {
    nickname: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

user.readAll = async (req, res) => {
  try {
    const users = await user.findAll();
    return res.send({ users });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = user;
