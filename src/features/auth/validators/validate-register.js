import Joi from "joi";

const registerSchema = Joi.object({
  Fullname: Joi.string().trim().required().messages({
    "string.empty": "กรุณาใส่ชื่อเต็ม",
  }),
  email: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/),
  ]).messages({
    "alternatives.match": "อีเมลไม่ถูกต้อง",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณาใส่รหัส",
      "string.pattern.base": "รหัสน้อยกว่า 4 ตัว",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "รหัส และ รหัสยืนยันไม่ตรงกัน",
    "string.empty": "กรุณาใส่รหัสยืนยัน",
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateRegister;
