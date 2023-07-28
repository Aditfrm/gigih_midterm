const Comment = require("../models/CommentModel");

// Get all comment
exports.getVideoComments = async (req, res) => {
  const { videoId } = req.params;

  try {
    const comments = await Comment.find({ VideoID: videoId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "error fetching comment" });
    console.log(err);
  }
};

exports.createComment = async (req, res) => {
  const { videoId } = req.params;
  const { username, comment } = req.body;

  try {
    const newComment = await Comment.create({
      VideoID: videoId,
      Username: username,
      Comment: comment,
    });

    res.json(newComment);
  } catch (err) {
    res.status(500).json({ message: "error creating comment" });
    console.log(err);
  }
};
