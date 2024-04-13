// routes/photos.js
const express = require('express');
const router = express.Router();
const models = require('../models/models');

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const photos = models.photoOfUserModel(userId);
  res.json(photos);
});

module.exports = router;
