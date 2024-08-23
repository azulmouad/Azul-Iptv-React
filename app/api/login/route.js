export const GET = async (request) => {
  const data = { message: "Hello world", status: "success" };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
