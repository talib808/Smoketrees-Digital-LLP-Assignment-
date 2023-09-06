const User = require('../models/User');
const Address = require('../models/Address');

// Create a new user and address
exports.createUserAndAddress = async (req, res) => {
  try {
    const newUser = await User.create(req.body.user);
    
    const newAddress = await Address.create(req.body.address);

    res.status(201).json({ user: newUser, address: newAddress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user and address' });
  }
};

