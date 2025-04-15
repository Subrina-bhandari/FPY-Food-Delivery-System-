// controllers/cartController.js
const Cart = require('../models/cartmodel'); 

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id; // Assuming you have a way to get the current user's ID, such as through JWT.
 
    const cartItem = await Cart.findOne({ userId, productId });
    if (cartItem) {
      cartItem.quantity += quantity;  // Update quantity if product already in the cart
      await cartItem.save();
    } else {
      const newCartItem = new Cart({ userId, productId, quantity });
      await newCartItem.save();
    }
    res.status(200).json({ message: 'Item added to cart' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding to cart' });
  }
};

// Other controller functions (removeFromCart, getCartItems, etc.)

module.exports = { addToCart };
