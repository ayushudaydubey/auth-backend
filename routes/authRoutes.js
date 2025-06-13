const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const authenticateToken = require("../middelware/authMiddelware.js");

// Auth routes backend




router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authenticateToken, authController.getMe);
router.post('/logout', authenticateToken, authController.logout);

module.exports = router;
