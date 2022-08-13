const { connect, connection } = require("mongoose");

connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social_network_api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = connection;
