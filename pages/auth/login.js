import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import * as S from "../../styles/pages/login.styled";
import jwt from "jsonwebtoken";

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

export const getServerSideProps = (context) => {
  // console.log(
  //   `${YELLOW}backend  pages/login pre-render --------------------------------------------------------------${END}`
  // );
  // const clientCookie = context.req.headers.get("authorization");
  // console.log("backend  clientCookie : ", clientCookie);
  // const bearerToken = context.
  // console.log("backend  context.req.headers : ", context.req.headers);
  // const clientCookie = context.req.headers.cookie
  //   ? context.req.headers.cookie
  //   : "";
  // console.log("backend  cookie : ", clientCookie);
  // const cookie = context.req ? context.req.headers.cookie : "";
  // console.log("backend  getServerSideProps cookie : ", cookie);
  // console.log("context.req.cookies : ", context.req.cookies);
  // console.log("context.req.headers.cookie : ", context.req.headers.cookie);
  // console.log("context.res.statusCode : ", context.res.statusCode);
  // return {
  //   props: { clientCookie },
  // };
  return {
    props: { data: "login" },
  };
};

const Login = (props) => {
  console.log(`${GREEN}pages/auth/login${END}`);

  const router = useRouter();
  const focus = useRef();
  const [user, setUser] = useState({ email: "", password: "" });
  const [auth, setAuth] = useState(false);
  // const [message, setMessage] = useState("You are not logged in.");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
    focus.current.focus();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then((response) => response.json())
      .catch((error) =>
        console.log("frontend /api/login error occurred : ", error)
      );
    // console.log(
    //   "frontend /api/login response.headers : ",
    //   response.headers
    // );
    // .then((response) => {
    //   // console.log("frontend /api/login response.json() : ", response);
    //   // localStorage.setItem("accessToken", response.accessToken);
    //   return response;
    // })
    console.log("frontend /api/login response : ", response);
    localStorage.setItem("accessToken", response.accessToken);
    // console.log(
    //   "frontend /api/login response.headers.authorization : ",
    //   response.headers.get("authorization")
    // );
    if (response?.authStatus) {
      setAuth(true);
      // setMessage("You are logged in.");
      router.push("/auth/admin");
    } else {
      setAuth(false);
      // setMessage("You are not logged in.");
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "/api/logout"
      // {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username: "1234" }),
      // }
    ).then((response) => response.json());
    localStorage.setItem("accessToken", response.accessToken);
    setAuth(false);
    router.push("/");
  };

  const handleResister = (e) => {
    e.preventDefault();
    router.push("/auth/register");
  };

  const checkAuth = async () => {
    const response = await fetch("/api/checkAuth", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      // credentials: "include",
    })
      .then((response) => response.json())
      .catch((error) => console.log("frontend  error occurred"));
    console.log("frontend /api/checkAuth response : ", response);
    // console.log(
    //   "frontend /api/checkAuth response.authStatus : ",
    //   response.authStatus
    // );
    // if (response["authStatus"]) setAuth(true);
    // else setAuth(false);
    if (response?.authStatus) setAuth(true);
    else setAuth(false);
  };

  // // auth
  // const authBtn = useRef();
  // // 페이스북 로그인 버튼 레이블 셋팅 메서드
  // const setLoginBtnLabel = (response) => {
  //   if (response.status === "connected") {
  //     authBtn.current.innerHTML = "Logout with facebook logoutAPI";
  //   } else {
  //     authBtn.current.innerHTML = "Login with facebook loginAPI";
  //   }
  // };

  // useEffect(() => {
  //   // 페이스북 로그인 초기화
  //   window.fbAsyncInit = function () {
  //     console.log("initialize the facebook login API.");
  //     FB.init({
  //       appId: "1336989357119247",
  //       cookie: true, // Enable cookies to allow the server to access the session.
  //       xfbml: true, // Parse social plugins on this webpage.
  //       version: "v15.0", // Use this Graph API version for this call.
  //     });
  //     // FB.getLoginStatus(
  //     //   setLoginBtnLabel
  //     //   // function (response) {
  //     //   // Called after the JS SDK has been initialized.
  //     //   // statusChangeCallback(response);        // Returns the login status.
  //     //   // console.log("response : ", response);
  //     //   // }
  //     // );
  //   };
  // });

  // useEffect(() => {
  //   // checkAuth();
  //   // console.log("frontend loginStatus : ", loginStatus);
  //   // (() => {
  //   //   async () => {
  //   //     console.log("async...");
  //   //     try {
  //   //       const response = await fetch("/api/isLogin").then((response) =>
  //   //         response.json()
  //   //       );
  //   //       console.log("response : ", response);
  //   //       setMessage("You are logged in.");
  //   //       setLoginStatus(true);
  //   //       console.log("try...");
  //   //     } catch {
  //   //       setMessage("You are not logged in.");
  //   //       setLoginStatus(false);
  //   //       console.log("catch...");
  //   //     }
  //   //   };
  //   // })();
  // }, [auth]);

  // const loginWithCookie = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/loginWithCookie", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ ...user }),
  //   })
  //     .then((response) => response.json())
  //     .catch((error) =>
  //       console.log("frontend /api/login error occurred : ", error)
  //     );
  //   // console.log(
  //   //   "frontend /api/login response.headers : ",
  //   //   response.headers
  //   // );
  //   // .then((response) => {
  //   //   // console.log("frontend /api/login response.json() : ", response);
  //   //   // localStorage.setItem("accessToken", response.accessToken);
  //   //   return response;
  //   // })
  //   console.log("frontend /api/login response : ", response);
  //   // console.log(
  //   //   "frontend /api/login response.headers.authorization : ",
  //   //   response.headers.get("authorization")
  //   // );
  // };

  // const isLoginWithCookie = async (e) => {
  //   e.preventDefault();

  //   // console.log("frontend cookie : ", document.cookie);

  //   const response = await fetch("/api/isLoginWithCookie")
  //     // .then((response) => response.text())
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  /api/isLogin error : ", error));
  //   console.log("fronend  /api/isLogin response : ", response);
  // };

  return (
    <S.Container>
      <Head>
        <title>Log In</title>
      </Head>
      <S.Layout>
        {/* <S.Notice>
          <div>user : {JSON.stringify(user, null, 4)}</div>
          <div>
            <div>message : {message}</div>
          </div>
        </S.Notice> */}
        <S.Form>
          <S.Input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            ref={focus}
            // isFocusedOut={isFocusedOut ? true : false}
            // onBlur={handleFocus}
            // focused={focused.toString()}
          />
          <S.Input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          {auth ? (
            <S.Button className="button" onClick={handleLogout}>
              Logout
            </S.Button>
          ) : (
            <S.Button className="button" onClick={handleLogin}>
              Login
            </S.Button>
          )}

          {/* <S.Button
            className="button"
            ref={authBtn}
            color="blue"
            onClick={() => {
              if (
                authBtn.current.innerHTML === "Login with facebook loginAPI"
              ) {
                FB.login((response) => {
                  console.log("login-response : ", response);
                  setLoginBtnLabel(response);
                });
              } else {
                FB.logout((response) => {
                  console.log("logout-response : ", response);
                  setLoginBtnLabel(response);
                });
              }
            }}
          >
            Login with facebook loginAPI
          </S.Button> */}
          <S.Button className="button" onClick={handleResister}>
            {/* Sign Up */}
            Create new account
          </S.Button>
          {/* <button onClick={isLogin}>isLogin</button> */}
        </S.Form>
      </S.Layout>
    </S.Container>
  );
};

export default Login;
