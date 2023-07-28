const Product = require("../models/ProductModel");

// Get all product
exports.getVideoProducts = async (req, res) => {
  const { videoId } = req.params;

  try {
    const products = await Product.find({ VideoID: videoId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
    console.log(err);
  }
};
