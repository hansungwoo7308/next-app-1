export default function handler(req, res) {
  console.log("request : ", req);
  // 포스트로 전송했으면...
  if (req.method === "POST") {
    // 쿠키에 저장
    // xml type 으로 전송된 셋헤더
    // Max-Age : 쿠키 생존 나이 : 3600 second = 1 hour
    res.setHeader(
      "Set-Cookie",
      "a_name=cooooooooooooooooooookie;Max-Age=3600;HttpOnly,Secure"
    );

    // 상태코드(성공여부) 설정...
    // Setting promise state...
    res.statusCode = 200;

    // 클라이언트로 보낼 응답객체 안에 데이터를 설정...
    // Storing my message to promise.data property
    // res.json({ myMessage: "ok" });
    res.json({ message: "myMessage..." });
  } else {
    res.status(200).json({ message: "You are logging in.!" });
  }
}
