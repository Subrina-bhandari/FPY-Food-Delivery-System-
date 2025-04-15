const express = require('express');
const router = express.Router();

// Example payment route
router.get('/', (req, res) => {
    res.send('Payment route working!');
});

module.exports = router;
