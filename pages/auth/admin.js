import Axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
// import { useEffect, useState } from "react";

import * as S from "../../styles/pages/admin.styled";
import useAuth from "../../core/hooks/useAuth";

const Admin = () => {
  const router = useRouter();

  // react context state and so on
  // const { auth, setAuth, isUserAuthenticated } = useAuth();

  const { status } = useSession();

  // next-auth state
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     // The user is not authenticated, handle it here.
  //   },
  // });
  // if (status === "loading") {
  //   return "Loading or not authenticated...";
  // }
  // return "User is logged in";

  // handler

  // const handleLogout = () => {
  //   Axios.get("/api/logout").then((res) => {
  //     if (res.status === 200) {
  //       router.push("/auth/login");
  //       // router.push("/");
  //     }
  //   });
  // };

  // const signout = async (e) => {
  //   e.preventDefault();
  //   const result = await signOut({ callbackUrl: "/auth/signin" });
  //   console.log("signout result : ", result);
  // };

  // useEffect(() => {
  //   // if (!isUserAuthenticated()) router.push("/auth/signin");
  // }, []);

  // const checkAuth = async () => {
  //   const response = await fetch("/api/checkAuth", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  error occurred"));

  //   console.log("pages/auth/admin   response : ", response);

  //   // if (response?.authStatus)
  //   //   setAuth((prev) => {
  //   //     return { ...prev, accessToken: "abcde" };
  //   //   });
  //   // else setAuth({ accessToken: "" });
  // };

  // const checkLogin = () => {
  //   Axios.get("/api/isLogin").then((res) => {
  //     if (res.status === 200 && res.data) {
  //       console.log("response : ", res);
  //       setIsLogin(true);
  //     } else {
  //       router.push("/auth/login");
  //     }
  //   });
  // };

  // logs
  console.log("");
  console.log("\x1b[32m/auth/admin\x1b[0m");
  console.log("status : ", status);
  console.log("");

  if (status === "authenticated")
    return (
      <S.Container>
        <S.Layout>
          <S.Admin>
            <S.Profile>
              <S.Image>
                <Image
                  src={"/images/Profile.JPG"}
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                />
              </S.Image>
              <S.Info>
                <h3>{"something"}</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda vel obcaecati molestiae mollitia aliquam quasi
                  aliquid consectetur nulla cum inventore voluptatibus incidunt
                  rerum, odit a quo iusto adipisci! Mollitia, commodi!
                </p>
              </S.Info>
            </S.Profile>
            <S.Button
              className="button"
              onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            >
              Sign out
            </S.Button>
          </S.Admin>
        </S.Layout>
      </S.Container>
    );
  else if (status === "loading")
    return (
      <S.Container>
        <S.Layout>
          <h1>Loading...</h1>
        </S.Layout>
      </S.Container>
    );
  else if (status === "unauthenticated")
    return (
      <S.Container>
        <S.Layout>
          <h1>You are not authenticated.</h1>
        </S.Layout>
      </S.Container>
    );
};

export default Admin;
