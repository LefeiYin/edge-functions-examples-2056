import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    let pkg = {
      'apikey':'112233',
      'data': {
        'model':'gpt-3.5-turbo',
        'messages':[{'role':'user','content':'你使用的是什么模型？是最新的模型吗'}]
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
    return new Response(request.body, {
        headers: { "content-type": "text/html" },
      });
};
