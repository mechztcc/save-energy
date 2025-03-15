import Joi from "joi";

const analyzeConsumeSchema = Joi.object({
  range: Joi.array()
    .required()
    .messages({ "any.required": "O período é requerido" }),
  equipments: Joi.array()
    .required()
    .messages({ "any.required": "Equipamentos requeridos" }),
  taxes: Joi.number()
    .required()
    .messages({ "any.required": "O valor da tarifa é requerido" }),
});

function verify(data: any) {
  const { error, value } = analyzeConsumeSchema.validate(data, {
    abortEarly: false,
  });
  return error ? error.details.map((err) => err.message) : null;
}

export const analyzeValidator = {
  analyzeConsumeSchema,
  verify,
};
