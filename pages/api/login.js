import jwt from "jsonwebtoken";

export default function handler(req, res) {
  // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
  // 있다면, 요청된 비밀번호를 데이터베이스에서 맞는지 확인한다.
  // 확인되면, 토큰을 생성한다.

  // console.log("-------request.body : ", req.body);
  // const { email, password } = req.body.user;
  // const KEY = "abc";
  const { headers, body } = req;
  console.log("headers : ", headers);
  console.log("body : ", body);

  if (!req) {
    res.status(404);
    res.end("Error");
    return;
  }
  if (req.method === "POST") {
    res
      // .setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure")
      // .setHeader("Set-Cookie", "a_name=Mike;HttpOnly,Secure")
      .setHeader("Set-Cookie", "key=value")
      .status(200)
      .end();
    // .json({ message: "hello" });
    // res.status(200).json({ token: jwt.sign({ email, password }, KEY) });
    // Max-Age : 쿠키 생존 나이 : 3600 second = 1 hour
    // res.setHeader(
    //   "Set-Cookie",
    //   "a_name=cooooooooooooooooooookie;Max-Age=3600;HttpOnly,Secure"
    // );
    // Setting promise state...
    // res.statusCode = 200;
    // Storing my message to promise.data property
    // res.json({ message: "포스트방식으로 전송된 요청." });
  } else {
    res.status(200).json({ message: "포스트방식으로 전송되지 않은 요청." });
  }
}
