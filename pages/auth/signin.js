import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Axios from "axios";
import jwt from "jsonwebtoken";

import useAuth from "../../core/hooks/useAuth";
import * as S from "../../styles/pages/login.styled";

const Signin = (props) => {
  // navigator instance
  const router = useRouter();

  // module using react context module
  // custom hook for using the react context provider
  // the provider contains the properties that have the auth, setAuth, ...
  const { auth, setAuth, isUserAuthenticated } = useAuth();

  // next-auth session module
  const { status } = useSession();

  // local state
  const focus = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState({ email: "", password: "" });
  // const [auth, setAuth] = useState(false);

  useEffect(() => {
    focus.current.focus();
  }, []);

  const signin = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/auth/admin",
      // redirect: false,
    });

    // const response = await fetch("/api/auth/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((response) => response.json())
    //   .catch((error) =>
    //     console.log("pages/auth/signin   /api/auth/signin   error : ", error)
    //   );

    console.log("/auth/signin   /api/auth/signin   result : ", result);
    // localStorage.setItem("accessToken", response.accessToken);

    // // backend 으로부터 받은 accessToken 을 react context provider 에 저장한다.
    // if (response?.authStatus) {
    //   setAuth({ accessToken: "something" });
    //   // AuthProvider 의 상태변경에 따라 전체컴포넌트의 렌더링이 된다.
    //   router.push("/auth/admin");
    // } else {
    //   router.push("/auth/signin");
    // }
  };

  const signout = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/signout").then((response) =>
      response.json()
    );
    console.log("/auth/signin   /api/auth/signout   response : ", response);
    // localStorage.setItem("accessToken", response.accessToken);
    // setAuth(false);
    // router.push("/");
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

  // const checkAuth = async () => {
  //   const response = await fetch("/api/checkAuth", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  error occurred"));
  //   console.log("frontend /api/checkAuth response : ", response);

  //   if (response?.authStatus) setAuth(true);
  //   else setAuth(false);
  // };

  // logs
  console.log("\x1b[32m/auth/signin\x1b[0m");
  console.log("status : ", status);
  // console.log("router.pathname : ", router.pathname);
  console.log("");

  return (
    <S.Container>
      <Head>
        <title>Log In</title>
      </Head>
      <S.Layout>
        <S.Form>
          <S.Input
            name="email"
            type="text"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
            ref={focus}
            // isFocusedOut={isFocusedOut ? true : false}
            // onBlur={handleFocus}
            // focused={focused.toString()}
          />
          <S.Input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {status === "authenticated" ? (
            <S.Button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </S.Button>
          ) : (
            <S.Button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                signIn("credentials", {
                  email: email,
                  password: password,
                  callbackUrl: "/auth/admin",
                });
              }}
            >
              Sign in
            </S.Button>
          )}
          <S.Button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              router.push("/auth/signup");
            }}
          >
            Create new account
          </S.Button>
        </S.Form>
      </S.Layout>
    </S.Container>
  );
};

export default Signin;
