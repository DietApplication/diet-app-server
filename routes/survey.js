const express = require('express');
const signUpController = require('../controllers/signup');
const router = express.Router();

// GET => /survey/checkemail
router.get('/checkemail', signUpController.validateEmail)
// POST => /survey/signup
router.post('/signup',signUpController.createUser);

module.exports = router;