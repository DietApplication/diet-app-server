import {
  checkTempUserEmail,
  createUserFromSurvey,
} from "../services/signUpService.js";

/**
 * Validates user email and uniquekey before accessing the survey
 * @returns Response with Code 200 in case user was found in database
 * @returns Response with Code 403 in case request user was not found
 */
export const validateEmail = (req, res, next) => {
  checkTempUserEmail(req)
    .then((data) => {
      if (data[0]) {
        return res.status(200).json({
          message: "User verified succesfully",
        });
      } else {
        return res.status(403).json({
          message: "No user was found",
        });
      }
    })
    .catch((error) => {
      const err = new Error(error);
      next(err);
    });
};

export const createUser = (req, res, next) => {};
