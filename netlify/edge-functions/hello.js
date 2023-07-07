export default async (request) => {
  return new Response("Hello, lalallalalala!", {
    headers: { "content-type": "text/html" },
  });
};
