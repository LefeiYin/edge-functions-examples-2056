import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const data = await request.json();
    
    let config = {
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ data.apikey,
      },
      method:'POST',
      body:data.package
    }
    context.log(config)
    const url = new URL("/", 'https://api.openai.com/v1/chat/completions');
    const res = await fetch(url,config);
    return res;

};
