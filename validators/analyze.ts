import * as yup from "yup";

export const CreateEquipmentSchema = yup.object().shape({
  range: yup.array().required("O periodo é requerido"),
  equipments: yup.array().required("Equipamentos  requeridos"),
  taxes: yup.number().required("O Valor da tarifa é requerido"),
});
