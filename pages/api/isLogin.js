import users from "../../models/users.json";
import jwt from "jsonwebtoken";

// 16진수 표기법
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const END = "\x1b[0m";

const usersDatabase = {
  users: users,
  setUsers(data) {
    this.users = data;
  },
  addUser(data) {
    this.users = [...this.users, data];
  },
  // setUsers: function (data) {
  //   this.users = data;
  // },
};

export default function handler(req, res) {
  console.log(
    `backend  ${YELLOW}/api/isLogin ------------------------------------------------------------------------------${END}`
  );

  /* 1) get the bearerToken */
  const bearerToken =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  console.log("backend  1) bearerToken : ", bearerToken);

  if (!bearerToken) return res.status(401).json({ message: "401" });

  // const token = req.headers.cookie;
  // console.log("backend  req.headers.cookie : ", req.headers.cookie);
  // if (!token) {
  //   console.log("backend  stauts 401");
  //   return res.status(401).json({ message: "401" });
  // }

  /* 2) verify the authorization */
  const decodedUser = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET);
  if (!decodedUser) res.status(403).json({ message: "Verification failed." });
  console.log("backend  2) decodedUser : ", decodedUser);
  // console.log(`${RED}backend  decodedUser : ${END}`, decodedUser);

  /* 3) find the user data with decoded user data in the database */
  const foundUser = usersDatabase.users.find(
    (user) =>
      user.email === decodedUser.email && user.password === decodedUser.password
  );
  console.log("backend  3) foundUser : ", foundUser);

  if (!foundUser)
    return res.status(401).json({ message: "requested user is not found." });

  /* 4) send the response */
  res
    .status(200)
    .json({ message: "You are logged in.", verifiedUser: foundUser });

  // jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
  //   // if (error) return res.status(403).json({ message: "Verification failed." });
  //   // console.log("backend  decodedUser : ", decoded);

  //   // console.log(
  //   //   `backend  ${GREEN}Finding the user data with decodedUser...${END}`
  //   // );
  //   // Compare database's data and decoded data
  //   // 베어러 토큰과 시크릿 키를 이용하여, 인코딩되어 있던 유저 데이터 decoded를 추출한다.
  //   // 데이터베이스의 정보와 디코딩한 정보가 일치하는지 확인한다.
  //   // const foundUser = usersDatabase.users.find(
  //   //   (user) =>
  //   //     user.email === decoded.email && user.password === decoded.password
  //   // );

  //   // if (!foundUser) {
  //   //   console.log("backend  requested user is not found.");
  //   //   return res.status(401).json({ message: "requested user is not found." });
  //   // }
  //   // console.log("backend  foundUser is found.");
  //   // console.log("backend  foundUser : ", foundUser);

  //   /* 4) send the response */
  //   // res
  //   //   .status(200)
  //   //   .json({ message: "You are logged in.", verifiedUser: foundUser });
  // });

  // jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
  //   if (error) return res.status(403).json({ message: "Verification failed." });

  //   // Compare database's data and decoded data
  //   // 베어러 토큰과 시크릿 키를 이용하여, 인코딩되어 있던 유저 데이터 decoded를 추출한다.
  //   // 데이터베이스의 정보와 디코딩한 정보가 일치하는지 확인한다.
  //   const foundUser = usersDatabase.users.find(
  //     (user) =>
  //       user.email === decoded.email && user.password === decoded.password
  //   );
  //   console.log("backend  foundUser : ", foundUser);

  //   if (!foundUser)
  //     return res.status(401).json({ message: "Your admin is not found." });

  //   res
  //     .status(200)
  //     .json({ message: "You are logged in.", verifiedUser: foundUser });
  // });

  // jwt.verify(
  //   bearerToken,
  //   process.env.ACCESS_TOKEN_SECRET,
  //   (error, decodedUser) => {
  //     if (error) return res.status(403);
  //     // .json({ message: "Verification failed." });
  //     decodedUserEmail = decodedUser.email;
  //   }
  // );

  // 어드민 페이지 접속 시 > 로그인 요청 > 유효성 검사 > 로그인 결과 넘겨줌
  // res.status(200).json({ message: "You are logged in." });
  // res.status(200).json({ name: req.cookies.a_name });
}
