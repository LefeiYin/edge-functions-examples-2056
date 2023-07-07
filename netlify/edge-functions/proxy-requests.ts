export default async (request: Request, context: Context) => {

  const joke = await fetch("https://chatbot0310.onrender.com/", {
    "headers": {
      "Accept": "application/json"
    },
    'method': "GET"
  }).then((res)=>{return res;});
   console.log(joke)
};
