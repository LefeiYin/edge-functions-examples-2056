import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    //const data = await request.json();
    let host = 'https://api.openai.com';
    let newheaders = new Headers(request.headers);
    newheaders.set('Host', host);
    newheaders.set('access-control-allow-origin', '*');
    newheaders.set('access-control-allow-credentials', true);
    
    let config = {
      headers:newheaders,
      method:request.method,
      body:request.body
    }
    
    const url = new URL("/v1/chat/completions/", host);
    context.log(url)
    const res = await fetch(url.href,config);
    return Response.json(res);

};
