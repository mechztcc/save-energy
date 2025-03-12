export default defineEventHandler(async (event) => {
  if (event.node.req.method !== "POST") {
    return createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    });
  }

  const body = await readBody(event);
  console.log(body);

  return {
    success: true,
    message: "Equipamento criado com sucesso!",
  };
});
