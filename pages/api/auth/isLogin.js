export default function handler(req, res) {
  res
    .status(200)
    .json({ status: "login", message: "here is isLogin backend." });
}
