const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://workarjun31:Jack7267@cluster0.ehyfijp.mongodb.net/bhojanboxmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");

    // Fetching data from "food_items" collection using native MongoDB driver
    const collection = mongoose.connection.db.collection("food_items");
    const data = await collection.find({}).toArray();
    
    console.log(/*"Fetched food_items data:", data*/); // This should now print the data

  } catch (err) {
    console.error("MongoDB connection error or data fetch failed:", err);
    process.exit(1);
  }
};

module.exports = mongoDB;
