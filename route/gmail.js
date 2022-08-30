const express = require('express');
const gmailController = require('../controllers/gmailController');
const router = express.Router();

router.post("/gmail", gmailController.gmailService)
module.exports = router