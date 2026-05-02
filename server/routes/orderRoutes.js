const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { auth, admin } = require('../middleware/auth');
const { sendOrderEmail } = require('../services/emailService');

// Create Order
router.post('/', async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress, userId } = req.body;
    const orderData = { items, totalAmount, shippingAddress };
    if (userId) orderData.user = userId;

    const order = new Order(orderData);
    await order.save();

    // Trigger email notification to seller (Simulation enabled)
    try {
      sendOrderEmail(order);
    } catch (e) {
      console.error('Email trigger failed:', e);
    }

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get User Orders
router.get('/my-orders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort('-createdAt');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin: Get all orders
router.get('/admin/all', auth, admin, async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').sort('-createdAt');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin: Update order status
router.put('/:id/status', auth, admin, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin: Statistics
router.get('/admin/stats', auth, admin, async (req, res) => {
  try {
    const totalUsers = await require('../models/User').countDocuments();
    const totalOrders = await Order.countDocuments();
    const orders = await Order.find();
    const revenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    
    res.json({ totalUsers, totalOrders, revenue });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
