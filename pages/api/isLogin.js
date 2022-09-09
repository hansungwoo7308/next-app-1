export default function handler(req, res) {
  // 클라이언트로 응답을 보낸다...
  // res.status(200).json({ name: req.cookies.a_name });
  res.status(200).json({ stateMessage: "You are logged in." });
}
