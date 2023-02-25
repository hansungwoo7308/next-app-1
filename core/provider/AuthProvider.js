import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import axiosCustom from "../lib/axios";

// react context instance
const AuthContext = createContext({});
// console.log("AuthContext : ", AuthContext);

// _app (entry point) 에 중앙화를 위해서 사용될 component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ accessToken: "" });

  const [accessToken, setAccessToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isUserAuthenticated = () => !!auth.accessToken; // 값이 있으면 트루, 없으면 폴스

  // next-auth
  const { data: session, status } = useSession();

  // authorization bearer 를 여기에 가져오자

  const signin = async (email, password) => {
    // 서버에 로그인 하고, 엑세스 토큰 받아오자
    const response = await axiosCustom.post("/api/auth/signin", {
      email,
      password,
    });
    console.log("\x1b[31mAuthProvider   response : \x1b[0m", response);
    // return response;
  };

  // useEffect(() => {
  // });

  // const test = async (email, password) => {
  //   const result = await fetch("/api/auth/signin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   console.log("result : ", result);
  // };

  // logs
  // console.log("");
  // console.log("\x1b[31m2. AuthProvider\x1b[0m");
  // console.log("session : ", session);
  // // console.log("status : ", status);
  // // console.log("auth : ", auth);
  // // console.log("isAuthenticated : ", isAuthenticated);
  // console.log("");

  return (
    <AuthContext.Provider value={{ auth, setAuth, isUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// useContext hook 에 사용될 argument
export default AuthContext;

// export const ProtectRoute = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth();
//   if (isLoading || (!isAuthenticated && window.location.pathname !== '/login')){
//     return <LoadingScreen />;
//   }
//   return children;
// };
