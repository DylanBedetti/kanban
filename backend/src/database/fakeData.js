const User = require("../models/User");
const Board = require("../models/Boards");

const insertFakeData = async () => {
  const userCount = await User.count();
  // const boardCount = await Board.count();

  if (userCount === 0) {
    await User.bulkCreate([
      {
        firstName: "bill",
        lastName: "jeff",
        profilePhoto: "afwdwdsf",
        password: "hello",
      },
      {
        firstName: "bob",
        lastName: "dong",
        profilePhoto: "bgbs",
        password: "hello",
      },
      {
        firstName: "dan",
        lastName: "rem",
        profilePhoto: "afdsdfvfvsf",
        password: "hello",
      },
      {
        firstName: "tom",
        lastName: "mon",
        profilePhoto: "fsdfdf",
        password: "hello",
      },
    ]);

    // await Board.bulkCreate([
    //   {
    //     name: "Work",
    //     backgroundImage: "url/spaghetti",
    //     userOwner:
    //   },
    // ]);

    console.log("Fake data inserted");
  } else {
    console.log("No fake data inserted");
  }
};

module.exports = insertFakeData;
