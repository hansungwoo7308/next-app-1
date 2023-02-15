// backend before request : middleware.ts
// useAuth hook을 사용하여 인증상태를 체크해서
// protected routes를 구현하자(역할베이스 - 특정경로를 특정역할만 접근허용)
// 참고 : the middleware size is limited to 1MB

import { NextRequest, NextResponse, userAgent } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

// imposible modules
// import jwt from "jsonwebtoken";
// import useAuth from './core/hooks/useAuth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.headers.get("authorization");
  const token = await getToken({ req: request });

  console.log("");
  console.log(`${YELLOW}1. middleware${END}`);
  console.log("");
  // console.log("pathname : ", pathname);
  // console.log("accessToken : ", accessToken);
  // console.log('middleware    request.headers : ', request.headers)

  // protected route 를 구현하기 위해서는, 아래의 조건을 확인한다.
  // 1) pathname : protected route
  // 2) roles : 페이지 접근 권한을 부여 > 클라이언트의 역할과 서버의 역할(기준)을 비교
  // 서버의 역할(기준)이 다르면, 리다이렉션한다.

  // 특정 역할만 접근가능하도록 한다
  if (pathname.startsWith("/auth/admin")) {
    console.log("your pathname starts with /pages/auth/admin...");
  }
  console.log("");

  // console.log(
  //   `${BLUE}middleware    request : ${JSON.stringify(request)}${END}`
  // );
  // console.log(`${BLUE}middleware    request.url : ${request.url}${END}`);
  // console.log(
  //   `${BLUE}middleware    request.headers : ${JSON.stringify(
  //     request.headers
  //   )}${END}`
  // );
  // console.log(
  //   `${BLUE}middleware    request.nextUrl : ${request.nextUrl}${END}`
  // );

  // if (token) {
  //   // Signed in
  //   console.log("middleware  token : ", JSON.stringify(token, null, 2));
  // } else {
  //   // Not Signed in
  //   // res.status(401)
  //   console.log("middleware  token do not exist");
  // }
  // // res.end()

  // console.log(
  //   "backend  refreshToken : ",
  //   // "backend  request.cookies.get('jwt') : ",
  //   request.cookies.get("jwt")
  // );
  // console.log("backend  request : ", request);
  // console.log("backend  request.headers : ", request.headers);
  // console.log("backend  request.nextUrl : ", request.nextUrl);
  // console.log("backend  NextResponse : ", NextResponse);
  // const reqHeadersAuth = request.headers['authorization'];
  // const authBearerToken = reqHeadersAuth && reqHeadersAuth.split(" ")[1];
  // // handle the [exception]
  // if (!authBearerToken)
  //   return res
  //     .status(401)
  //     .json({ message: "Bearer Token is required for authorization." });
  // console.log("backend  authBearerToken : ", authBearerToken);
  // jwt.verify(
  //   authBearerToken,
  //   process.env.ACCESS_TOKEN_SECRET,
  //   (error, decodedUser) => {
  //     if (error)
  //       return res.status(403).json({ message: "Verification failed." });
  //   }
  // );
  // console.log("backend  request.headers : ", request.headers);
  // console.log("backend  req : ", req);
  // console.log("backend  ev : ", ev);
  // const res = NextResponse.rewrite(new URL("/", request.url));
  // userAgent : browser : chrome
  // const ua = userAgent(request);
  // console.log("backend  userAgent : ", ua);
  // const req = request;
  // const reqHeaders = request.headers;
  // console.log("backend  req : ", req);
  // console.log("backend  req.ua : ", reqUa);
  // console.log("backend  reqHeaders : ", request.headers);
  // console.log("backend  request.url : ", request.url);
  // console.log("backend  request.nextUrl : ", request.nextUrl);
  // request.nextUrl : object
  // const requestUrl = request.url;
  // const url = new URL("/about", requestUrl);
  // const url = new URL("http://localhost:3000/about");
  // const url = new URL("/about", "http://localhost:3000/");
  // console.log("backend  URL : ", url);
  // return NextResponse.redirect("http://localhost:3000/about");
  // return NextResponse.redirect(new URL("/about", request.url));
  // console.log("backend  res : ", res);
  // return res;
  // console.log("backend  url : ", new URL("/", request.url));
  // return NextResponse.redirect(new URL("/", request.url));
  // return NextResponse.redirect("http://localhost:3000/about");
}

export const config = {
  matcher: [
    // "/",
    // "/blog",
    // "/about",
    // "/auth/register",
    // "/auth/signin",
    "/auth/admin",
  ],
  // matcher: ["/api/auth/signin"], // 동적경로는 무효화, 정적경로만 유효화
  // matcher: ["/", "/products", "/about", "/register", "/login"],
  // matcher: "/:path*", // matcher path에 매칭된 요청은 위의 미들웨어를 실행한다.
  // matcher: "/", // matcher path에 매칭된 요청은 위의 미들웨어를 실행한다.
  // matcher: "/about/:path*", // matcher path에 매칭된 요청은 위의 미들웨어를 실행한다.
};
