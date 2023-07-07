import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const body = await request.json();
    //let data = body.data;
    return context.json(body);

};
