import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import * as S from "../../styles/pages/login.styled";
import jwt from "jsonwebtoken";

export const getServerSideProps = (context) => {
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
    props: {},
  };
};

const Login = ({}) => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("Wellcome");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // auth
  const authBtn = useRef();
  // 페이스북 로그인 버튼 레이블 셋팅 메서드
  const setLoginBtnLabel = (response) => {
    if (response.status === "connected") {
      authBtn.current.innerHTML = "Logout with facebook logoutAPI";
    } else {
      authBtn.current.innerHTML = "Login with facebook loginAPI";
    }
  };

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

  useEffect(() => {
    // console.log("frontend document.cookie : ", document.cookie);
    // checkLoginStatus();
    //
    // console.log("sessionStorage : ", sessionStorage);
    // (() => {
    //   console.log("Immediately Invoked Function...");
    //   async () => {
    //     console.log("async...");
    //     try {
    //       const response = await fetch("/api/isLogin").then((response) =>
    //         response.json()
    //       );
    //       console.log("response : ", response);
    //       setMessage("You are logged in.");
    //       setIsLoggedIn(true);
    //       console.log("try...");
    //     } catch {
    //       setMessage("You are not logged in.");
    //       setIsLoggedIn(false);
    //       console.log("catch...");
    //     }
    //   };
    // })();
  });

  const login = async (e) => {
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
  };

  const testIsLogin = async (e) => {
    e.preventDefault();
    // const clientCookie = document.cookie;
    // console.log("fronent  testIsLogin clientCookie : ", clientCookie);

    const response = await fetch("/api/isLogin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log("frontend  /api/isLogin error : ", error));
    console.log("fronend  /api/isLogin response : ", response);
  };

  const logout = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "1234" }),
    }).then((response) => response.json());
    setMessage("You are logged out.");
  };

  const handleLogin2 = async (e) => {
    e.preventDefault();

    // Request and Response
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    }).then((response) => response.json());

    console.log("response : ", response);
    const token = response.token;
    // console.log("token : ", token);
    if (token) {
      const json = jwt.decode(token);
      console.log("json : ", json);
    } else {
      console.log("Something went wrong.");
    }

    // Redirect
  };

  const handleResister = (e) => {
    e.preventDefault();
    router.push("/auth/register");
  };

  return (
    <S.Container>
      <Head>
        <title>Log In</title>
      </Head>
      <S.Layout>
        <S.Notice>
          <div>user : {JSON.stringify(user, null, 4)}</div>
          <div>
            <div>message : {message}</div>
          </div>
        </S.Notice>
        <S.Form onSubmit={login}>
          <S.Input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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

          <S.Button className="button" type="submit">
            Login
          </S.Button>
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
          {/* <S.Button className="button" onClick={handleResister}>
            Resister
          </S.Button> */}
          <button onClick={testIsLogin}>testIsLogin</button>
        </S.Form>
      </S.Layout>
    </S.Container>
  );
};

export default Login;
