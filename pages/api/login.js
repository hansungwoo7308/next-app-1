import jwt from "jsonwebtoken";
import users from "../../models/users.json";

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
console.log("backend  usersDatabase.users : ", usersDatabase.users);

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
  console.log(
    "backend  request occurred ---------------------------------------"
  );
  console.log("backend  req.body : ", req.body);
  // handle the [exception] -------------------------------------------------------
  if (req.method !== "POST")
    return res
      .status(400)
      .json({ message: "Wrong request. You have to request by POST method." });
  else if (!req.body.email || !req.body.password)
    return res
      .status(400)
      .json({ message: "Email and Password are required." });

  // 요청된 이메일을 데이터베이스에서 있는지 찾는다. -----------------------------------
  // 있다면, 요청된 비밀번호를 데이터베이스에서 맞는지 확인한다.
  // find the user in the database ------------------------------------------------------
  // const reqUser = {
  //   email: req.body.email,
  //   password: req.body.password,
  // };
  // console.log("backend  reqUser : ", reqUser);
  const foundUser = usersDatabase.users.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );
  console.log("backend  foundUser : ", foundUser);

  if (!foundUser)
    return res.status(401).json({ message: "Your admin is not found." });

  // get the bearer token -----------------------------------------------------------------
  // // headers
  // const authBearerToken =
  //   req.headers.authorization && req.headers.authorization.split(" ")[1];
  // if (!authBearerToken) return res.status(401);
  // // .json({ message: "Bearer Token is required for authorization." });
  // // console.log("backend  authBearerToken : ", authBearerToken);

  // // verify the authorization
  // let decodedUserEmail;
  // jwt.verify(
  //   authBearerToken,
  //   process.env.ACCESS_TOKEN_SECRET,
  //   (error, decodedUser) => {
  //     if (error) return res.status(403);
  //     // .json({ message: "Verification failed." });
  //     decodedUserEmail = decodedUser.email;
  //   }
  // );

  // 확인되면, 토큰을 생성한다.
  // issue a jwt -----------------------------------------------------------------------
  const user = { email: req.body.email, password: req.body.password };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  if (!accessToken)
    return res.status(401).json({ message: "You are not authorized." });
  console.log("backend  issued accessToken for client : ", accessToken);

  // set the [response] -------------------------------------------------------------
  res
    // .setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure")
    // .setHeader("Set-Cookie", "a_name=Mike;HttpOnly,Secure")
    // .setHeader("Set-Cookie", "key=value")
    .status(200)
    .json({ accessToken: accessToken });

  // if (req.method === "POST") {
  //   res
  //     // .setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure")
  //     // .setHeader("Set-Cookie", "a_name=Mike;HttpOnly,Secure")
  //     .setHeader("Set-Cookie", "key=value")
  //     .status(200)
  //     .json({ accessToken: accessToken });
  //   // res.status(200).json({ token: jwt.sign({ email, password }, KEY) });
  //   // Max-Age : 쿠키 생존 나이 : 3600 second = 1 hour
  //   // res.setHeader(
  //   //   "Set-Cookie",
  //   //   "a_name=cooooooooooooooooooookie;Max-Age=3600;HttpOnly,Secure"
  //   // );
  //   // Setting promise state...
  //   // res.statusCode = 200;
  //   // Storing my message to promise.data property
  //   // res.json({ message: "포스트방식으로 전송된 요청." });
  // }
}
