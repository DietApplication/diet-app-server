const express = require("express");
const signUpController = require("../controllers/signup");
const router = express.Router();
const validator = require("../middlewares/validator");
const schemas = require("../../validations/surveySchemas");

/**
 * @swagger
 * /survey/checkemail:
 *  get:
 *      description: get customers
 */
router.get(
  "/checkemail",
  validator(schemas.checkEmailSchema),
  signUpController.validateEmail
);
router.post("/signup", signUpController.createUser);

module.exports = router;
