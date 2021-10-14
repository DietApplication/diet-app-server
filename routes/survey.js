const express = require('express');
const signUpController = require('../controllers/signup');
const router = express.Router();
const validator = require('../validations/validator');
const schemas = require('../validations/schemas');


/**
 * @swagger
 * 
 */
router.get('/checkemail', validator(schemas.checkEmailSchema), signUpController.validateEmail)
router.post('/signup',signUpController.createUser);

module.exports = router;