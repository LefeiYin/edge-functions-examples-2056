export default async (request: Request, context: Context) => {

  const joke = await fetch("https://chatbot0310.onrender.com/", {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await joke.json();
  return Response.json(jsonData);
};
