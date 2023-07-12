import Joi from "joi";

const inputFormSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "กรุณาใส่ชื่อห้อง",
  }),
  details: Joi.string().trim().required().messages({
    "string.empty": "กรุณาใส่รายละเอียด",
  }),
  roomNumber: Joi.required(),
  time: Joi.required(),
  dateStart: Joi.required(),
  dateEnd: Joi.required(),
});

const validateMeeingForm = (input) => {
  const { error } = inputFormSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateMeeingForm;
