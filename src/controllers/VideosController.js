const Video = require("../models/VideoModel");

// Get all videos and show urlImageThumbnail
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching video thumbnails" });
    console.log(err);
  }
};

exports.createVideo = async (req, res) => {
  const { titleVideo, urlImageThumbnail, urlVideo } = req.body;

  try {
    const newVideo = await Video.create({
      TitleVideo: titleVideo,
      UrlImageThumbnail: urlImageThumbnail,
      UrlVideo: urlVideo,
    });

    res.json(newVideo);
  } catch (err) {
    res.status(500).json({ message: "error creating video" });
    console.log(err);
  }
};
