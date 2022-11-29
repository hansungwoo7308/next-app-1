import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import * as S from "../../styles/pages/login.styled";
import jwt from "jsonwebtoken";

export const getServerSideProps = (context) => {
  // console.log("context.query : ", context.query);
  // console.log("context.params : ", context.params);
  //
  // console.log("context.params : ", context.params);
  // console.log("context.req.headers.cookie : ", context.req.headers.cookie);
  // console.log("context.req : ", context.req);
  // const test = context.query[0];
  // console.log("test : ", test);
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
  const setLoginStatus = (response) => {
    if (response.status === "connected") {
      console.log("loged in...");
      authBtn.current.innerHTML = "logout";
      // document.querySelector(".authBtn").value = "logout";
      // FB.api("/me", function (response) {
      //   document.querySelector("#name").innerHTML =
      //     "\tWelcome, " + response.name;
      // });
    } else {
      console.log("loged out...");
      authBtn.current.innerHTML = "login";
      // document.querySelector("#authBtn").value = "login";
      // document.querySelector("#name").innerHTML = "";
    }
  };

  // 로그인 상태를 확인해오기...
  useEffect(() => {
    window.fbAsyncInit = function () {
      console.log("initialize the facebook login API.");
      FB.init({
        appId: "1336989357119247",
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: "v15.0", // Use this Graph API version for this call.
      });
      // FB.getLoginStatus(
      //   setLoginStatus
      //   // function (response) {
      //   // Called after the JS SDK has been initialized.
      //   // statusChangeCallback(response);        // Returns the login status.
      //   // console.log("response : ", response);
      //   // }
      // );
    };

    // console.log("useEffect...");
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
  }, []);

  // default logic...
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    }).then((response) => response.json());
    // What is isLoggedIn in response object?

    console.log("response.isLoggedIn : ", response.isLoggedIn);
    if (response.isLoggedIn === true) {
      setMessage("You are logged in.");
    } else {
      setMessage("A error occured.");
    }
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

  const handleLogin = (e) => {
    e.preventDefault();

    Axios.post("/api/login").then((res) => {
      console.log("response : ", res);
      // console.group("requested... and then responsed...");
      // console.groupEnd("response : ", res);
      // console.group("Login > API > Response : ", res);
      // console.groupEnd();
      if (res.status === 200) {
        console.log("res.status === 200");
        router.push("/auth/admin");
        // 네비게이션 메뉴 중 login > logout 으로 변경하거나
        // admin or username ... 으로 변경해주어야...
      }
    });
  };

  const handleResister = (e) => {
    e.preventDefault();
    router.push("/auth/register");
  };

  // // const [focused, setFocused] = useState(false);
  // const [isFocusedOut, setIsFocusedOut] = useState(false);
  // const handleFocus = () => {
  //   setIsFocusedOut(true);
  //   console.log(isFocusedOut);
  //   // setFocused(true);
  //   // console.log("handleFocus");
  //   // console.log(focused.toString());
  //   // console.log(focused);
  // };

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
            {/* <div>
              <h1>Message</h1>
            </div> */}
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
          <S.Button
            className="button"
            ref={authBtn}
            type="submit"
            color="blue"
            onClick={(e) => {
              console.log("authBtn...");
              console.log(
                "authBtn.current.innerText : ",
                authBtn.current.innerText
              );
              // console.log("e.target.textContent : ", e.target.textContent);
              // auth
              if (e.target.textContent === "login") {
                FB.login((response) => {
                  // after login, set the input value.
                  setLoginStatus(response);
                  console.log("login-response : ", response);
                });
              } else {
                FB.logout((response) => {
                  // after logout, set the input value.
                  setLoginStatus(response);
                  console.log("logout-response : ", response);
                });
              }
            }}
          >
            Login
          </S.Button>
          <S.Button className="button" onClick={handleResister}>
            Resister
          </S.Button>
        </S.Form>
      </S.Layout>
    </S.Container>
  );
};

export default Login;
