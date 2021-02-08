const User = require("../models/User");
const Board = require("../models/Board");
const List = require("../models/List");
const Card = require("../models/Card");
const Comment = require("../models/Comment");

const insertFakeData = async () => {
  const userCount = await User.count();
  const boardCount = await Board.count();

  if (userCount === 0 || boardCount === 0) {
    await User.bulkCreate([
      {
        firstName: "bill",
        lastName: "jeff",
        email: "jeff@gmail.com",
        profilePhoto: "afwdwdsf",
        password: "hello",
      },
      {
        firstName: "bob",
        lastName: "dong",
        email: "bob@gmail.com",
        profilePhoto: "bgbs",
        password: "hello",
      },
      {
        firstName: "dan",
        lastName: "rem",
        email: "dan@gmail.com",
        profilePhoto: "afdsdfvfvsf",
        password: "hello",
      },
      {
        firstName: "tom",
        lastName: "mon",
        email: "tom@gmail.com",
        profilePhoto: "fsdfdf",
        password: "hello",
      },
    ]);

    await Board.bulkCreate([
      {
        name: "Work",
        backgroundImage: "url/spaghetti",
        users_id: "1",
      },
      {
        name: "Home",
        backgroundImage: "url/house",
        users_id: "3",
      },
    ]);

    await List.bulkCreate([
      {
        order: 0,
        title: "TO DO",
        users_id: "1",
        boards_id: "1",
      },
      {
        order: 1,
        title: "DOING",
        users_id: "1",
        boards_id: "1",
      },
      {
        order: 2,
        title: "DONE",
        users_id: "1",
        boards_id: "1",
      },
    ]);

    await Card.bulkCreate([
      {
        order: 0,
        title: "TO DO",
        description: "Wow a cool card",
        users_id: "2",
        lists_id: "1",
      },
      {
        order: 1,
        title: "DOING",
        description: "Another amazing card",
        users_id: "2",
        lists_id: "1",
      },
      {
        order: 2,
        title: "DONE",
        description: "Last Card",
        users_id: "3",
        lists_id: "2",
      },
    ]);

    await Comment.bulkCreate([
      {
        order: 0,
        content: "This is a comment",
        users_id: "2",
        cards_id: "1",
      },
      {
        order: 1,
        content: "this is another comment",
        users_id: "2",
        cards_id: "2",
      },
      {
        order: 2,
        content: "this is my final comment",
        users_id: "3",
        cards_id: "2",
      },
    ]);

    console.log("Fake data inserted");
  } else {
    console.log("No fake data inserted");
  }
};

module.exports = insertFakeData;
