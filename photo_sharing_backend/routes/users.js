// routes/users.js

const express = require('express');
const router = express.Router();
const models = require('../models/models');

router.get('/list', (req, res) => {
  const userList = models.userListModel();
  res.json(userList);
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const user = models.userModel(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
