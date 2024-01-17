const mongoose = require("mongoose");

const connection = async () => {
  try {
    const mongoURI =
      "mongodb+srv://mandeeprahar:9802705402@cluster0.dg2aosu.mongodb.net/mandeepbackend?retryWrites=true&w=majority";

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
};

module.exports = {
  connection,
};
