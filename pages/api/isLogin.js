export default function handler(req, res) {
  // 어드민 페이지 접속 시 > 로그인 요청 > 유효성 검사 > 로그인 결과 넘겨줌
  res.status(200).json({ message: "You are logged in." });
  // res.status(200).json({ name: req.cookies.a_name });
}
