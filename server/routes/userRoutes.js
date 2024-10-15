const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// CRUD operations for users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

router.delete('/', async (req, res) => {
    await User.deleteMany();
    res.json({ message: 'All users deleted' });
  });

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  });

router.put('/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});


module.exports = router;
