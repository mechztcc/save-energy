import { PrismaClient } from "@prisma/client";
import { CreateEquipmentSchema } from "~/validators/equipments";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await CreateEquipmentSchema.validate(body, {
      abortEarly: false,
    });

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
