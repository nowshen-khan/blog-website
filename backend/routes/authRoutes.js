const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const { login, register  } = require('../controllers/authController');



// Login API
router.post('/login', login);
router.post('/register', register);

module.exports = router;
