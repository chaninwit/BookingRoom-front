import Joi from "joi";

const loginSchema = Joi.object({
  Email: Joi.string().messages({
    "string.empty": "อีเมลไม่ถูกต้อง",
  }),
  password: Joi.string().required().messages({
    "string.empty": "กรุณาใส่รหัส",
  }),
});

export default (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};
