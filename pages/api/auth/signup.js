export default async function handler(req, res) {
  if (req.method !== "POST")
    res.status(404).json({ message: "Your method is not POST" });

  res.status(200).json({ message: "Signup was completed" });
}
