import Joi from "joi";

export const createEquipmentSchema = Joi.object({
  name: Joi.string().required().messages({ "any.required": "O nome é obrigatório" }),
  model: Joi.string().optional(),
  brand: Joi.string().optional(),
  category: Joi.string().optional(),
  potency: Joi.string().required().messages({ "any.required": "A potência é obrigatória" }),
  tension: Joi.string().optional(),
  freq: Joi.string().optional(),
});

function verify(data: any) {
  const { error, value } = createEquipmentSchema.validate(data, {
    abortEarly: false,
  });
  return error ? error.details.map((err) => err.message) : null;
}

export const createEquipmentValidator = {
  createEquipmentSchema,
  verify,
};
