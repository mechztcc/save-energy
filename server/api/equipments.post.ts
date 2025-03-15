import { PrismaClient } from "@prisma/client";
import { createEquipmentValidator } from "~/validators/equipments";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  const errors = createEquipmentValidator.verify(body);
  if (errors) {
    const error = createError({
      statusCode: 400,
      data: {
        errors
      }
    });
    sendError(event, error)
  }

  const newEquipment = await prisma.equipment.create({
    data: {
      name: body.name,
      potency: body.potency,
      brand: body.brand,
      category: body.category,
      chain: body.chain,
      description: body.description,
      freq: body.freq,
      model: body.model,
      tension: body.tension,
      potencyFact: body.potency,
    },
  });
  setResponseStatus(event, 201);
  return { success: true, equipment: newEquipment };
});
