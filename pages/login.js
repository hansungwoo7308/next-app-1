import Axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "../styles/login.styled";

const Login = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("/api/login").then((res) => {
      console.log("response from '/api/login'", res);
      if (res.status === 200) {
        router.push("/admin");
        // 네비게이션 메뉴 중 login > logout 으로 변경하거나
        // admin or username ... 으로 변경해주어야...
      }
    });
  };

  const handleResister = (e) => {
    e.preventDefault();
    router.push("/register");
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
      {/* <h1>Login Form</h1> */}
      <S.Form onSubmit={handleLogin}>
        <S.Input
          className="input"
          type="text"
          name="email"
          placeholder="Email"
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
        />
        <S.Button className="button" type="submit" color="blue">
          Login
        </S.Button>
        <S.Button className="button" onClick={handleResister}>
          Resister
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
