export default function handler(req, res) {
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  // Max-Age : 쿠키 생존 나이 : 3600초 = 1시간, 0초 = 쿠키사망
  res.statusCode = 200;
  res.json({ message: "ok" });
}
