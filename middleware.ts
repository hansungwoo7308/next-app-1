// backend before request : middleware.ts
// the middleware size is limited to 1MB

// import { userAgent } from "next/server";
import { getToken } from "next-auth/jwt";

import { NextRequest, NextResponse } from "next/server";

// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { getSession } from "next-auth/react";

const SECRET = process.env.NEXTAUTH_SECRET;
const requireAuth: string[] = ["/admin"];

async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authorization = request.headers.get("authorization");
  const tokenRaw = await getToken({ req: request, secret: SECRET, raw: true });
  const token = await getToken({ req: request, secret: SECRET, raw: false });

  console.log("");
  console.log("\x1b[31m1. middleware\x1b[0m");
  console.log("tokenRaw : ", tokenRaw);
  console.log("token : ", token);
  // console.log("token.role : ", token.role);
  // console.log("request.nextauth.token : ", request);
  // console.log(
  //   "request.cookies : ",
  //   request.cookies.get("next-auth.session-token")
  // );
  // console.log("authorization : ", authorization);
  // console.log("pathname : ", pathname);
  // console.log("");
  // console.log("accessToken : ", accessToken);
  // console.log('middleware    request.headers : ', request.headers)

  if (request.nextUrl.pathname.startsWith("/about")) {
    console.log("request.nextUrl.pathname : ", request.nextUrl.pathname);
  }
  if (request.nextUrl.pathname.startsWith("/auth/admin")) {
    console.log("request.nextUrl.pathname : ", request.nextUrl.pathname);
  }

  // protected route 를 구현하기 위해서는, 아래의 조건을 확인한다.
  // 1) pathname : protected route
  // 2) roles : 페이지 접근 권한을 부여 > 클라이언트의 역할과 서버의 역할(기준)을 비교
  // 서버의 역할(기준)이 다르면, 리다이렉션한다.

  // 특정 역할만 접근가능하도록 한다
  // if (pathname.startsWith("/auth/admin")) {
  //   console.log("your pathname starts with /pages/auth/admin...");
  // }
  console.log("");

  // console.log("backend  request.headers : ", request.headers);
  // console.log("backend  req : ", req);
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

export default withAuth(
  async function middleware(req: NextRequest) {
    console.log("");
    console.log("\x1b[31m1. middleware\x1b[0m");

    const token = await getToken({ req: req, secret: SECRET });
    console.log("token : ", token);

    // const token = await getToken({ req: req, secret: SECRET, raw: true });
    // console.log("token.role : ", token.role);
    // const session = await getSession({req})

    console.log("");
    if (req.nextUrl.pathname.startsWith("/auth/admin")) {
      return NextResponse.rewrite(req.url);
    }
  },
  {
    callbacks: {
      authorized: async (params) => {
        // authorized: ({ token }) => {
        console.log("params : ", params);
        console.log("token in middleware : ", params.token);
        return true;
      },
      // authorized: ({ token }) => token?.role === "admin",
    },
  }
);

// export default withAuth(
//   async function middleware(request: NextRequest) {
//     const { pathname } = request.nextUrl;
//     const authorization = request.headers.get("authorization");
//     // const token = await getToken({ req: request, secret: SECRET, raw: true });

//     console.log("");
//     console.log(`${RED}1. middleware${END}`);
//     // console.log("token : ", token);
//     console.log("request.nextauth.token : ", request);
//     // console.log(
//     //   "request.cookies : ",
//     //   request.cookies.get("next-auth.session-token")
//     // );
//     // console.log("authorization : ", authorization);
//     // console.log("pathname : ", pathname);
//     // console.log("");
//     // console.log("accessToken : ", accessToken);
//     // console.log('middleware    request.headers : ', request.headers)

//     if (request.nextUrl.pathname.startsWith("/about")) {
//       console.log("request.nextUrl.pathname : ", request.nextUrl.pathname);
//     }
//     if (request.nextUrl.pathname.startsWith("/auth/admin")) {
//       console.log("request.nextUrl.pathname : ", request.nextUrl.pathname);
//     }

//     // protected route 를 구현하기 위해서는, 아래의 조건을 확인한다.
//     // 1) pathname : protected route
//     // 2) roles : 페이지 접근 권한을 부여 > 클라이언트의 역할과 서버의 역할(기준)을 비교
//     // 서버의 역할(기준)이 다르면, 리다이렉션한다.

//     // 특정 역할만 접근가능하도록 한다
//     // if (pathname.startsWith("/auth/admin")) {
//     //   console.log("your pathname starts with /pages/auth/admin...");
//     // }
//     console.log("");

//     // console.log(
//     // const reqHeadersAuth = request.headers['authorization'];
//     // const authBearerToken = reqHeadersAuth && reqHeadersAuth.split(" ")[1];
//     // // handle the [exception]
//     // if (!authBearerToken)
//     //   return res
//     //     .status(401)
//     //     .json({ message: "Bearer Token is required for authorization." });
//     // console.log("backend  authBearerToken : ", authBearerToken);
//     // jwt.verify(
//     //   authBearerToken,
//     //   process.env.ACCESS_TOKEN_SECRET,
//     //   (error, decodedUser) => {
//     //     if (error)
//     //       return res.status(403).json({ message: "Verification failed." });
//     //   }
//     // );
//     // const requestUrl = request.url;
//     // console.log("backend  URL : ", url);
//     // return NextResponse.redirect("http://localhost:3000/about");
//     // return NextResponse.redirect(new URL("/about", request.url));
//     // console.log("backend  res : ", res);
//     // return res;
//     // console.log("backend  url : ", new URL("/", request.url));
//     // return NextResponse.redirect(new URL("/", request.url));
//     // return NextResponse.redirect("http://localhost:3000/about");
//   },

//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === "admin",
//     },
//   }
// );

export const config = {
  matcher: ["/about", "/auth/admin"],
  // matcher: ["/api/auth/signin"], // 동적경로는 무효화, 정적경로만 유효화
  // matcher: ["/", "/products", "/about", "/register", "/login"],
  // matcher: "/:path*", // matcher path에 매칭된 요청은 위의 미들웨어를 실행한다.
  // matcher: "/about/:path*", // matcher path에 매칭된 요청은 위의 미들웨어를 실행한다.
};
