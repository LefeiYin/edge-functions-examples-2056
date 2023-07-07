import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const url = new URL("/", 'https://chatbot0310.onrender.com');
    const res = await fetch(url);
    const result = {res:res}
    return result;
};
