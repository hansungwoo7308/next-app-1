import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Head from "next/head";

import * as S from "../../styles/pages/register.styled";

let renderCount = 0;

const Signup = () => {
  const [values, setValues] = useState({
    // id: "",
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const router = useRouter();
  const { status } = useSession();

  // reference
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");
  // passwordRef.current = watch("name");

  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log("e : ", e);
    // handleSubmit()
    const result = await axios.post("/api/auth/signup");
    console.log("result : ", result);
  };

  useEffect(() => {
    setFocus("name", { shouldSelect: true });
  }, [setFocus]);

  renderCount++;

  // logs
  console.log("");
  console.log("\x1b[32m/auth/signup\x1b[0m");
  console.log("error : ", errors);
  console.log("watch : ", watch());
  console.log("");

  if (status === "authenticated") router.push("/");
  else if (status === "loading")
    return (
      <S.Container>
        <Head>
          <title>Signup</title>
        </Head>
        <S.Layout style={{ position: "relative" }}>
          <h1>Loading...</h1>
        </S.Layout>
      </S.Container>
    );
  else if (status === "unauthenticated")
    return (
      <S.Container>
        <Head>
          <title>Signup</title>
        </Head>
        <S.Layout style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "18px",
              fontWeight: "800",
            }}
          >
            <span>renderCount : </span>
            {renderCount}
          </div>
          <form onSubmit={handleSignup}>
            <button style={{ color: "red" }}>Signup</button>
          </form>
          <S.Form
            // onSubmit={handleSignup}
            onSubmit={handleSubmit((data) => console.log("data : ", data))}
          >
            <S.Div>
              <S.Input
                className="input"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "This is required",
                  // required: true,
                  maxLength: 10,
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
                  required: "This is required",
                  // required: true,
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
                  // required: true,
                  required: "This is required",
                  maxLength: 10,
                  minLength: {
                    value: 4,
                    message: "Min length is 4",
                  },
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
                  // required: true,
                  required: "This is required",
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
