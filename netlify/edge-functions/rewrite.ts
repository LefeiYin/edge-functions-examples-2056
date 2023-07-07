import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const body = await request.json();
    //let data = body.data;
    return new Response(body, {
        headers: { "content-type": "text/html" },
    });

};
