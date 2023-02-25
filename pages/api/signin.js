export default function handler(req, res) {
  console.log("\x1b[33m/api/auth/signin\x1b[0m");
  const { email, password } = req.body;
  console.log("req.body : ", req.body);
  console.log("email : ", email);
  console.log("password : ", password);

  res.status(200).json({ message: "response was sent from signin handler" });
}
