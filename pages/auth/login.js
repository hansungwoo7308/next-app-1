import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "../../styles/pages/login.styled";
import jwt from "jsonwebtoken";

const Login = () => {
  const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });

  const handleLogin2 = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    }).then((response) => response.json());

    console.log("response : ", response);
    const token = response.token;
    console.log("token : ", token);

    if (token) {
      const json = jwt.decode(token);
      console.log("json : ", json);
    } else {
      console.log("Something went wrong.");
    }
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
        <pre
          style={{
            minWidth: "300px",
            minHeight: "200px",
            border: "3px dashed",
            marginBottom: "20px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {JSON.stringify(user, null, 4)}
        </pre>
        <S.Form onSubmit={handleLogin2}>
          <S.Input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            // pattern=""
            // isFocusedOut={isFocusedOut ? true : false}
            // onBlur={handleFocus}
            // focused={focused.toString()}
            // required
            // 패턴(유효성검사)이 필요
          />
          <S.Input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <S.Button className="button" type="submit" color="blue">
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
