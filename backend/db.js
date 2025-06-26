const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://workarjun31:Jack7267@cluster0.ehyfijp.mongodb.net/bhojanboxmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");

    // Fetch data from "food_items"
    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    const data = await foodItemsCollection.find({}).toArray();

    // Fetch data from "foodCategory"
    const categoryCollection = mongoose.connection.db.collection("food_category");
    const catData = await categoryCollection.find({}).toArray();

    // Store both in global variables
    global.food_items = data;
    global.food_category = catData;

    console.log("🌍 Global data loaded");
    
  } catch (err) {
    console.error("❌ MongoDB connection or data fetch failed:", err);
    process.exit(1);
  }
};

module.exports = mongoDB;
