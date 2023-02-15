// 16진수 표기법
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const END = "\x1b[0m";

export default function handler(req, res) {
  console.log(
    `${YELLOW}backend   api/testIsLogin -------------------------------------------------------${END}`
  );

  /* 1) get the accessToken */
  console.log("backend   req.headers.cookie : ", req.headers.cookie);
  const accessToken = req.headers.cookie["accessToken"];

  if (!accessToken)
    return res
      .status(400)
      .json({ authStatus: false, message: "accessToken is required." });

  /* 2) decode the bearerToken */
  // console.log(`${RED}backend  verify scope debuging...${END}`);
  const decodedUser = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  console.log("backend  2) decodedUser : ", decodedUser);

  if (!decodedUser)
    return res
      .status(403)
      .json({ authStatus: false, message: "Decoding failed." });
  // console.log(`${RED}backend  decodedUser : ${END}`, decodedUser);

  /* 3) find the user data with decoded user data in the database */
  const foundUser = usersDatabase.users.find(
    (user) =>
      user.email === decodedUser.email && user.password === decodedUser.password
  );
  console.log("backend  3) foundUser : ", foundUser);

  if (!foundUser)
    return res
      .status(401)
      .json({ authStatus: false, message: "requested user is not found." });

  return res.status(200).json({
    authStatus: true,
    message: "You are logged in.",
    verifiedUser: foundUser,
  });
}
