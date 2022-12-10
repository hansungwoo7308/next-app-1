export default function handler(req, res) {
  const reqHeaders = req.headers;
  //   console.log("frontend   req.headers : ", test);
  console.log("frontend   req.headers.cookie : ", reqHeaders.cookie);
  console.log(
    "frontend   req.headers.authorization : ",
    reqHeaders.authorization
  );

  if (req.method === "POST") {
    console.log("frontend   req.body(post) : ", req.body);
    res.status(200).json({ "message-1": "this is test message." });
  }
}
