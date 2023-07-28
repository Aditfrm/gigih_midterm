const express = require("express");
const router = express.Router();
const VideosController = require("../controllers/VideosController");
const ProductController = require("../controllers/ProductController");
const CommentController = require("../controllers/CommentController");

router.get("/videos", VideosController.getAllVideos);
router.get("/videos/:videoId/products", ProductController.getVideoProducts);
router.get("/videos/:videoId/comments", CommentController.getVideoComments);
router.post("/videos/:videoId/comments", CommentController.createComment);
router.post("/videos", VideosController.createVideo);

module.exports = router;
