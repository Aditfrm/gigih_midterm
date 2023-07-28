const { model, Schema } = require("mongoose");

// Define the schema for comment List
const commentSchema = new Schema({
  VideoID: String,
  Username: { type: String, required: true },
  Comment: { type: String, required: true },
  Timestamp: { type: Date, default: Date.now },
});

module.exports = model("comments", commentSchema);
