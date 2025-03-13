import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const equipments = await prisma.equipment.findMany();

    return { equipments };
  } catch (error) {
    return {
      error: error,
    };
  }
});
