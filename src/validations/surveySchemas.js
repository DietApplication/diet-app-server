const yup = require("yup");

module.exports = {
  checkEmailSchema: yup.object({
    email: yup.string().email().required(),
    uniquekey: yup.string().required(),
  }),
  surveySignUpSchema: yup.object({})
};
