// models/cartModel.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },  // Assuming you have a Product model
  quantity: { type: Number, required: true },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart; 
