export default async (request) => {
    let config = {
      headers:request.headers,
      method:'POST',
      body:request.body
    }

    const res = await fetch('https://api.openai.com/v1/chat/completions/',config);
    //return Response.json(res);
    return res
};
