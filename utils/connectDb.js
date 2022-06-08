const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log("Connected to MongoDB" + data.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
