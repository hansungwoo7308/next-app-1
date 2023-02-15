import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "../../styles/pages/register.styled";

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

const Signup = () => {
  const [values, setValues] = useState({
    // id: "",
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const router = useRouter();

  // 리액트-훅-폼 API > 디스트럭쳐링...
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors },
  } = useForm();

  // 패스워드 확인을 위한 > 패스워드 레퍼런스...
  const password = useRef();
  password.current = watch("password");

  // 폼 > 이벤트 핸들러에 사용될 > 콜백펑션...
  const onSubmit = (data) => {
    console.log("data : ", data);
    setValues({ ...data });
    // setValues({ data });

    // setTimeout(() => {
    //   router.push("/auth/login");
    // }, 3000);
  };

  useEffect(() => {
    setFocus("name", { shouldSelect: true });
  }, [setFocus]);

  // console.log('wath("name") : ', watch("name"));

  // logs
  console.log(`${GREEN}/auth/signup${END}`);

  return (
    <S.Container>
      <Head>
        <title>Signup</title>
      </Head>
      <S.Layout>
        {/* <S.Billboard>
          <h1>Component Local State</h1>
          <div>
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </S.Billboard> */}
        {/* <pre>{JSON.stringify(isValid, null, 4)}</pre> */}
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Div>
            <S.Input
              className="input"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 5,
              })}
            />
            <div>
              {errors.name && errors.name.type === "required" && (
                <p>This field is required.</p>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <p>Max Length is 5 character.</p>
              )}
            </div>
          </S.Div>
          <S.Div>
            <S.Input
              className="input"
              type="email"
              placeholder="Email"
              autoComplete="off"
              {...register("email", {
                required: true,
                maxLength: 10,
              })}
            />
            {errors.email && <p>This email field is required.</p>}
          </S.Div>
          <S.Div>
            <S.Input
              className="input"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: 10,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p>This field is required.</p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <p>Password max length is 10 characters.</p>
            )}
          </S.Div>
          <S.Div>
            <S.Input
              className="input"
              type="password"
              placeholder="Password Confirm"
              {...register("passwordConfirm", {
                required: true,
                validate: (passwordConfirm) => {
                  return passwordConfirm === password.current;
                },
              })}
            />
            {errors.passwordConfirm &&
              errors.passwordConfirm.type === "required" && (
                <p>This field is required.</p>
              )}
            {errors.passwordConfirm &&
              errors.passwordConfirm.type === "validate" && (
                <p>The password is not matched.</p>
              )}
          </S.Div>
          <S.Button className="button" type="submit">
            Sign Up
          </S.Button>
        </S.Form>
      </S.Layout>
    </S.Container>
  );
};

export default Signup;
