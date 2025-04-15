// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authmiddleware');
const { addToCart } = require('../controllers/cartcontroller'); 

// Protect the addToCart route with authentication
router.post('/add', verifyToken, addToCart);

module.exports = router;
 