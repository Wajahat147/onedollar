const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { auth, admin } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Configure Multer for local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Get all products (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { category, search, limit } = req.query;
    let query = {};
    if (category) query.category = category;
    if (search) query.name = { $regex: search, $options: 'i' };

    const products = await Product.find(query).limit(limit ? parseInt(limit) : 0);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.id || req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create Product (Admin Only)
router.post('/', auth, admin, upload.single('image'), async (req, res) => {
  try {
    const productData = req.body;
    if (req.file) {
      productData.images = [`/uploads/${req.file.filename}`];
    }
    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update Product (Admin Only)
router.put('/:id', auth, admin, upload.single('image'), async (req, res) => {
  try {
    const productData = req.body;
    if (req.file) {
      productData.images = [`/uploads/${req.file.filename}`];
    }
    const product = await Product.findByIdAndUpdate(req.params.id, productData, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete product (Admin only)
router.delete('/:id', auth, admin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
