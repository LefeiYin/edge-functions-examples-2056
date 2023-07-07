export default async (request: Request, context: Context) => {

  return new Response("The request to this URL was logged!!!!!", {
    headers: { "content-type": "text/html" },
  });
};
