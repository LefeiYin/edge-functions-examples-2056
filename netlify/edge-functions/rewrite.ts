import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const body = await request.json();
    let data = body.data;
    let pkg = {
      'apikey':data.spikey,
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
      body:JSON.stringify(pkg.data)
    }
    const url = new URL("/", 'https://api.openai.com/v1/chat/completions');
    const res = await fetch(url,config);
    //return res;
    return res;
};
