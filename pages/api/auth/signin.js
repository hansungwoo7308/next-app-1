export default function handler(req, res) {
  console.log("\x1b[33mpages/api/auth/signin\x1b[0m");
  const { email, password } = req.body;
  console.log("pages/api/auth/signin    req.body : ", req.body);
  console.log("pages/api/auth/signin    email : ", email);
  console.log("pages/api/auth/signin    password : ", password);

  res.status(200).json({ message: "response was sent from signin handler" });
}
