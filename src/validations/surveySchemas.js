import yup from "yup";

export default {
  checkEmailSchema: yup.object({
    email: yup.string().email().required(),
    uniquekey: yup.string().required(),
  }),
  surveySignUpSchema: yup.object({}),
};
