const { model, Schema } = require("mongoose");

// Define the schema for Product List
const productSchema = new Schema({
  VideoID: String,
  ProductID: String,
  LinkProduct: String,
  Title: String,
  Price: Number,
});

module.exports = model("product", productSchema);
