const { getBoardViewQuery } = require("../utils/queries");
const sequelize = require("../database");
const { QueryTypes } = require("sequelize");

exports.getBoardView = (req, res, next) => {
  sequelize
    .query(getBoardViewQuery, { type: QueryTypes.SELECT })
    .then((result) => {
      res.status(200).json({ message: "Query Successful", result: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// How I want the data to look
/*
{
  "board": {
    "id": 1,
    "listitems": [
      {
        "id": 1,
        "title": "this is my first list",
        "cards": [
          {
            "id": 1,
            "title": "wow a card",
            "description": "another cool card",
            "comments": [
              {
                "id": 3,
                "content": "this is a sick comment"
              },
              {
                "id": 2,
                "content": "replying to the other comment"
              }
              ]
          },
          {
            "id": 2,
            "title": "wow a card",
            "description": "another cool card"
          }
        ]
      },
      {
        "id": 2,
        "title": "this is my second list"
      },
      {
        "id": 3,
        "title": "this is my third list"
      }
    ]
  }
}
*/
