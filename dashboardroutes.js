const express = require('express');
const router = express.Router();

// Example dashboard route
router.get('/', (req, res) => {
    res.send('Dashboard route working!');
});

module.exports = router;
