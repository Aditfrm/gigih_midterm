const { model, Schema } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// Define the schema for Video Thumbnail List
const videoSchema = new Schema({
  VideoID: { type: String, default: uuidv4() },
  TitleVideo: String,
  UrlImageThumbnail: String,
  UrlVideo: String,
});

module.exports = model("videos", videoSchema);
