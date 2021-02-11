const newman = require("newman");

newman.run({
  collection: require("./postman/Trello.postman_collection.json"),
  reporters: "cli",
  environment: require("./postman/Trello Dev.postman_environment.json"),
});
