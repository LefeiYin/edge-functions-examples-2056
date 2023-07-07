import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    let config = {
      headers:request.headers,
      method:'POST',
      body:request.body
    }
    //return Response.json(res);
    return fetch('https://api.openai.com/v1/chat/completions', config)
};
