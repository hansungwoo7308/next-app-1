import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "../../styles/register.styled";

const Register = () => {
  // 컴포넌트 로컬 스테이트...
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

    setTimeout(() => {
      router.push("/auth/login");
    }, 3000);
  };

  // 부가작업 > 포커스 셋팅...
  useEffect(() => {
    setFocus("name", { shouldSelect: true });
  }, [setFocus]);

  // console.log('wath("name") : ', watch("name"));
  console.log("rendered...");

  return (
    <S.Container>
      <Head>
        <title>Register</title>
      </Head>
      <S.Layout>
        <S.Billboard>
          <h1>Component Local State</h1>
          <div>
            <pre>{JSON.stringify(values, null, 4)}</pre>
            {/* <pre>{JSON.stringify(isValid, null, 4)}</pre> */}
          </div>
        </S.Billboard>
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
            Resister
          </S.Button>
        </S.Form>
      </S.Layout>
    </S.Container>
  );
};

export default Register;
