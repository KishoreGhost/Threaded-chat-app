const express = require('express');
const apiLimiter = require('../config/rateLimiter');
const { saveMessage, getMessages } = require('../controllers/chatController');

const router = express.Router();

router.post('/message', apiLimiter, saveMessage);
router.get('/messages', apiLimiter, getMessages);

module.exports = router;
