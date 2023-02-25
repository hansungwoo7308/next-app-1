import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
// import Axios from "axios";
// import jwt from "jsonwebtoken";

// import useAuth from "../../core/hooks/useAuth";
import * as S from "../../styles/pages/login.styled";

const Signin = (props) => {
  const router = useRouter();

  const { status } = useSession();

  // using react context (global state)
  // custom hook for using the react context provider
  // the provider contains the properties that have the auth, setAuth, ...
  // const { auth, setAuth, isUserAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState({ email: "", password: "" });
  // const [auth, setAuth] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSignin = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      callbackUrl: "/auth/admin",
      // redirect: false,
    });
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

  // logging
  console.log("");
  console.log("\x1b[32m/auth/signin\x1b[0m");
  // console.log("email : ", emailRef.current?.value);
  // console.log("password : ", passwordRef.current?.value);
  // console.log("status : ", status);
  // console.log("router.pathname : ", router.pathname);
  console.log("");

  if (status === "authenticated") router.push("/");

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
            // 1) state
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}

            // 2) reference
            ref={emailRef}

            // onChange={(e) => setUser({ ...user, email: e.target.value })}
            // isFocusedOut={isFocusedOut ? true : false}
            // onBlur={handleFocus}
            // focused={focused.toString()}
          />
          <S.Input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            // 1) state
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}

            // 2) reference
            ref={passwordRef}

            // onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {/* {status === "authenticated" ? (
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
          )} */}
          <S.Button className="button" onClick={handleSignin}>
            Sign in
          </S.Button>
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
