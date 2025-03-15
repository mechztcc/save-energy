import { analyzeValidator } from "~/validators/analyze";

export default defineEventHandler(async (event) => {
  const { range, equipments, taxes } = await readBody(event);

  const errors = analyzeValidator.verify({ range, equipments, taxes });

  if (errors) {
    const error = createError({
      statusCode: 400,
      data: {
        errors
      }
    });
    sendError(event, error)
  }


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
});
