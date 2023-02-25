import jwt from "jsonwebtoken";
import users from "../../models/users.json";

// 16진수 표기법
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const END = "\x1b[0m";

const usersDatabase = {
  users: users,
  setUsers(data) {
    this.users = data;
  },
  addUser(newUser) {
    this.users = [...this.users, newUser];
  },
  // setUsers: function (data) {
  //   this.users = data;
  // },
};

// before addition
// console.log("usersDatabase.users : ", usersDatabase.users);
// push
// const test = [...usersDatabase.users];
// test.push({
//   id: 2,
//   name: "jane",
//   email: "jane@jain",
//   password: "123",
// });
// usersDatabase.setUsers(test);
// spread operator
// usersDatabase.setUsers([ // for imutable,
//   ...usersDatabase.users,
//   {
//     id: 2,
//     name: "jane",
//     email: "jane@jain",
//     password: "123",
//   },
// ]);
// after addition
// console.log("usersDatabase.users : ", usersDatabase.users);

export default function handler(req, res) {
  console.log(`${YELLOW}/api/login${END}`);

  // something...
  if (req.method !== "POST")
    return res
      .status(400)
      .json({ message: "You have to request by POST method." });
  else if (!req.body.email || !req.body.password)
    return res
      .status(400)
      .json({ message: "Email and Password are required." });

  /* 1) find the user in the database */
  const foundUser = usersDatabase.users.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );
  console.log("/api/login   1) foundUser : ", foundUser);
  if (!foundUser)
    return res.status(401).json({ message: "Your admin is not found." });

  /* 2) issue a jwt */
  const user = { email: req.body.email, password: req.body.password };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  console.log("/api/login   2) accessToken : ", accessToken);

  /* 3) send the response */
  res.status(200).json({
    accessToken: accessToken,
    authStatus: true,
    message: "accessToken is issued.",
  });
  // .setHeader("Authorization", "Bearer " + accessToken)
  // .setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure")
  // .setHeader("Set-Cookie", "a_name=Mike;HttpOnly,Secure")

  // if (req.method === "POST") {
  //   res
  //     // .setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure")
  //     .setHeader("Set-Cookie", "key=value")
  //     .status(200)
  //     .json({ accessToken: accessToken });
  //   // res.status(200).json({ token: jwt.sign({ email, password }, KEY) });
  //   // Max-Age : 쿠키 생존 나이 : 3600 second = 1 hour
  // }

  // console.log(`backend  ${YELLOW}/api/login${END}`);
}
