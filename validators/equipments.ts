import * as yup from "yup";

export const CreateEquipmentSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  model: yup.string().optional(),
  brand: yup.string().optional(),
  category: yup.string().optional(),
  potency: yup.string().required("A potência é obrigatória"),
  tension: yup.string().optional(),
  freq: yup.string().optional(),
});
