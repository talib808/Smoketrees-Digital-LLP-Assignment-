const express = require('express');
const router = express.Router();
const UserAddressController = require('../controllers/UserAddressController');

// Define a route for creating both a user and an address
router.post('/createUserAndAddress', UserAddressController.createUserAndAddress);

module.exports = router;

