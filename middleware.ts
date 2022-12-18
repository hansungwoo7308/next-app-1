// middleware.ts
import { NextResponse, userAgent } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log("backend  middleware occurred -----------------------------");
  // console.log("backend  request.headers : ", request.headers);
  // // console.log("backend  request.cookies : ", request.cookies);
  // const test = request.cookies.get("accessToken");
  // console.log("backend  accessToken : ", test);
  // const checkLoginStatus = async () => {
  //   const response = await fetch("/api/isLogin", {
  //     headers: {
  //       Authorization: "Bearer test",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  error occurred"));
  //   console.log("frontend isLogin : ", response);
  // };
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
  // const reqUa = request.ua;
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

// See "Matching Paths" below to learn more
export const config = {
  // matcher: ["/", "/products", "/about", "/register", "/login"],
  matcher: "/about/:path*", // matcher path에 매칭된 요청은 위의 미들웨어를 실행한다.
};
