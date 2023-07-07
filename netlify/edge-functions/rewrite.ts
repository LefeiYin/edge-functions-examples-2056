import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    console.log(request);
    const url = new URL("/", 'https://chatbot0310.onrender.com');
    const res = await fetch(url);
    let result = {req:request,res:res}
    return result;
};
