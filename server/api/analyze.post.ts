import { CreateEquipmentSchema } from "~/validators/analyze";

export default defineEventHandler(async (event) => {
  try {
    const { range, equipments, taxes } = await readBody(event);
    const isValid = await CreateEquipmentSchema.validate(
      { range, equipments, taxes },
      {
        abortEarly: false,
      }
    );

    const totalByEqp: any[] = [];

    const total = equipments.reduce((all: number, eqp: any) => {
      const potency = parseFloat(eqp.potency);
      const hours = parseFloat(eqp.hours);

      const totaleqp = potency * hours;
      const totalKw = totaleqp / 1000;
      totalByEqp.push({
        ...eqp,
        totalKw,
        cost: (totalKw * parseFloat(taxes)).toFixed(2),
      });

      return all + totaleqp;
    }, 0);

    return {
      totalByEqp,
    };
  } catch (error) {
    if (error instanceof Error && error.name === "ValidationError") {
      setResponseStatus(event, 400);
      return {
        message: "Erro de validação",
        errors: (error as any).inner?.map((err: any) => ({
          path: err.path,
          message: err.message,
        })),
      };
    }

    return {
      error: error,
    };
  }
});
