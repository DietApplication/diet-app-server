import express from "express";
import { validateEmail, createUser } from "../controllers/signup.js";
import validator from "../middlewares/validator.js";
import schemas from "../../validations/surveySchemas.js";

const router = express.Router();

router.get("/checkemail", validator(schemas.checkEmailSchema), validateEmail);
router.post("/signup", createUser);

export default router;
