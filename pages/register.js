import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import * as S from "../styles/register.styled";

const Register = () => {
  // [페이지 전환]을 위한...
  const router = useRouter();

  // 리엑트 [돔 선택]을 위한...
  const ref = useRef([]);

  // [상태관리]...
  const [values, setValues] = useState({
    // id: "",
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [isValid, setIsValid] = useState({
    isValidName: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidPasswordConfirm: false,
  });

  // 유효성 검사를 위한 [정규표현식]
  // const regexInspection = /[a-z]{3}/;

  // 리엑트 돔에 매핑할 [데이터]...
  const inputs = [
    {
      id: 1,
      name: "name", // input.name = 'username' string
      type: "text",
      placeholder: "User Name",
      errorMessage: "",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Adress",
      errorMessage: "",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "",
      required: true,
    },
    {
      id: 4,
      name: "passwordConfirm",
      type: "password",
      placeholder: "Password Confirm",
      errorMessage: "",
      required: true,
    },
  ];

  // 유효성검사
  const testValidation = (data) => {
    const regexName = /[a-c]{3}/;
    const regexEmail = /[a-c]{3}/;
    const regexPassword = /[0-9]{7}/;
    // const regexPasswordConfirm = /[a-c]{3}/;

    const regex = /.../;
    const isValid = regex.test(data);
    console.log("유효성검사중...");
    console.log("testValidation : ", isValid);
    return isValid;

    // if (!data.name || !data.email || !data.password || !data.passwordConfirm) {
    //   console.log("유효성검사 : 4개중 한개라도 없으면...");
    //   console.group("유효성검사");
    //   console.log("data.name : ", data.name);
    //   console.log("data.email : ", data.email);
    //   console.log("data.password : ", data.password);
    //   console.log("data.passwordConfirm : ", data.passwordConfirm);
    //   console.groupEnd();
    //   return false;
    // } else {
    //   console.log("유효성검사 : 모두 있음");
    //   return true;
    // }
  };

  // 데이터저장, 유효성검사
  const handleChange = (e) => {
    // 데이터저장
    setValues({ ...values, [e.target.name]: e.target.value });

    // 유효성검사
    const result = testValidation(e.target.value);
    if (e.target.name === "name" && result) {
      setIsValid({ ...isValid, isValidName: true });
    } else if (e.target.name === "email" && result) {
      setIsValid({ ...isValid, isValidEmail: true });
    } else if (e.target.name === "password" && result) {
      setIsValid({ ...isValid, isValidPassword: true });
    } else if (e.target.name === "passwordConfirm" && result) {
      setIsValid({ ...isValid, isValidPasswordConfirm: true });
    }
    // console.log("유효성검사중...");
    // const regex = /[a-z]{3}/;
    // const test = regex.test(e.target.value);
    // if (e.target.name === "name" && test) {
    //   setIsValid({ ...isValid, isValidName: true });
    // } else if (e.target.name === "email" && test) {
    //   setIsValid({ ...isValid, isValidEmail: true });
    // } else if (e.target.name === "password" && test) {
    //   setIsValid({ ...isValid, isValidPassword: true });
    // } else if (e.target.name === "passwordConfirm" && test) {
    //   setIsValid({ ...isValid, isValidPasswordConfirm: true });
    // }
  };

  // 가입처리, 서버에 데이터 전송, 유효성검사
  const handleResister = (e) => {
    e.preventDefault();

    // 유효성검사
    testValidation(values);

    // 로그인페이지로 이동

    // 삭제될....
    // if (
    //   values.name &&
    //   values.email &&
    //   values.password &&
    //   values.passwordConfirm
    // ) {
    //   setTimeout(() => {
    //     console.log("register is completed.");
    //     router.push("/login");
    //   }, 3000);
    //   console.log("register is processing...");
    // } else {
    //   console.log("condition is not fulfiled.");
    // }
  };

  // 부가작업
  useEffect(() => {
    ref.current.focus(); // 포커스

    // const test = /abc{1,2}/;
    // const testString = "abcdefgabc";
    // const testResult = test.test(testString);
    // console.log("testResult : ", test);
    // console.log("testResult : ", testString);
    // console.log("testResult : ", testResult);
  }, []);

  return (
    <S.Container>
      <div
        style={{
          border: "3px dashed var(--main--color)",
          background: "#ddd",
          borderRadius: "15px",
          padding: "50px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Local State
        </h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <pre>{JSON.stringify(values, null, 4)}</pre>
          <pre>{JSON.stringify(isValid, null, 4)}</pre>
        </div>
      </div>
      <br />
      <S.Form onSubmit={handleResister}>
        {inputs.map((input) => {
          return (
            <S.Input
              className="input"
              key={input.id}
              name={input.name}
              placeholder={input.placeholder}
              ref={input.id === 1 ? ref : null} // 포커스를 위한 인풋 오브젝 참조
              pattern={"[a-z]{3}"}
              // 의존 관계인 프롭스... onChange > value
              // 체인지핸들러에 의해 로컬스테이트의 값이 변경되고...
              // 벨류값이 셋팅...
              onChange={handleChange}
              value={values[input.name]}
            />
          );
        })}
        <S.Button
          className="button"
          type="submit"
          disabled={
            !isValid.isValidName ||
            !isValid.isValidEmail ||
            !isValid.isValidPassword ||
            !isValid.isValidPasswordConfirm
              ? true
              : false
          }
        >
          Resister
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Register;
