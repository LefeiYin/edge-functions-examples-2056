import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const data = await request.json();
    //let data = context.json(body);
    context.log(data.apikey,data.apikey)
    let pkg = {
      'apikey':data.apikey,
      'data': {
        'model':'gpt-3.5-turbo',
        'messages':[{'role':'user','content':data.prompt}]
      }
    }
    let config = {
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ pkg.apikey,
      },
      method:'POST',
      body:context.json(pkg.data)
    }
    const url = new URL("/", 'https://api.openai.com/v1/chat/completions');
    const res = await fetch(url,config);
    return res;

};
