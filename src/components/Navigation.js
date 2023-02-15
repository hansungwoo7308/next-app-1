import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaBars, FaTimes, FaWindowClose } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
// import { useSelector } from "react-redux";

import useAuth from "../../core/hooks/useAuth";
import * as S from "../../styles/components/Navigation.styled";

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

const Navigation = () => {
  const router = useRouter();
  const { status } = useSession();
  // const { auth, setAuth, isUserAuthenticated } = useAuth();

  // 프로퍼티의 상태에 따라서 css를 제어하기위한, isClicked and clickedItem
  const [isClicked, setIsClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    changeClickedItem(); // 현재 pathname에 따라서 state 변경
  });
  // }, [router.pathname]);

  /* comments */
  // const [authBtnLabel, setAuthBtnLabel] = useState("Sign In");
  // const authBtn = useRef();
  // const setLoginStatus = (response) => {
  //   if (response.status === "connected") {
  //     console.log("loged in...");
  //     authBtn.current.innerHTML = "logout";
  //     // document.querySelector(".authBtn").value = "logout";
  //     // FB.api("/me", function (response) {
  //     //   document.querySelector("#name").innerHTML =
  //     //     "\tWelcome, " + response.name;
  //     // });
  //   } else {
  //     console.log("loged out...");
  //     authBtn.current.innerHTML = "login";
  //     // document.querySelector("#authBtn").value = "login";
  //     // document.querySelector("#name").innerHTML = "";
  //   }
  // };

  // useEffect(() => {
  //   // window.fbAsyncInit = function () {
  //   //   console.log("initialize the facebook login API.");
  //   //   FB.init({
  //   //     appId: "1336989357119247",
  //   //     cookie: true, // Enable cookies to allow the server to access the session.
  //   //     xfbml: true, // Parse social plugins on this webpage.
  //   //     version: "v15.0", // Use this Graph API version for this call.
  //   //   });
  //   //   FB.getLoginStatus(
  //   //     setLoginStatus
  //   //     // function (response) {
  //   //     // Called after the JS SDK has been initialized.
  //   //     // statusChangeCallback(response);        // Returns the login status.
  //   //     // console.log("response : ", response);
  //   //     // }
  //   //   );
  //   // };
  // }, []);

  /* features */

  // const checkAuth = async () => {
  //   const response = await fetch("/api/checkAuth", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //     // credentials: "include",
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  error occurred"));
  //   // console.log("frontend /api/checkAuth response : ", response);
  //   // console.log(
  //   //   "frontend /api/checkAuth response.authStatus : ",
  //   //   response.authStatus
  //   // );

  //   if (response?.authStatus) setAuth(true);
  //   else setAuth(false);
  // };

  const signout = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/signout").then((response) =>
      response.json()
    );
    // localStorage.setItem("accessToken", response.accessToken);
    // setAuth(false);
    // router.push("/");
  };

  /* styles */

  /* true is hambergur button, false is not */
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  /* Check the pathname and Change the state. */
  const changeClickedItem = () => {
    if (router.pathname === "/") {
      setClickedItem("home");
    } else if (router.pathname === "/products") {
      setClickedItem("products");
    } else if (router.pathname === "/about") {
      setClickedItem("about");
    } else if (router.pathname === "/auth/register") {
      setClickedItem("register");
    } else if (router.pathname === "/auth/login") {
      setClickedItem("login");
    } else if (router.pathname === "/auth/signin") {
      setClickedItem("signin");
    } else if (router.pathname === "/auth/admin") {
      setClickedItem("admin");
    } else if (router.pathname === "/blog") {
      setClickedItem("blog");
    }
  };

  return (
    <S.Container>
      <S.Logo clickedItem={clickedItem === "home"}>
        <Link href={"/"}>
          <a>
            <AiOutlineGlobal size={30} />
          </a>
        </Link>
      </S.Logo>

      <S.List isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        <S.Item clickedItem={clickedItem === "home"}>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
          <S.SubList>
            <S.SubItem>
              <Link href={"#"}>
                <a>sub menu</a>
              </Link>
              <S.AsideList>
                <S.AsideItem>
                  <Link href={"#"}>
                    <a>aside menu</a>
                  </Link>
                </S.AsideItem>
                <S.AsideItem>
                  <Link href={"#"}>
                    <a>aside menu</a>
                  </Link>
                </S.AsideItem>
                <S.AsideItem>
                  <Link href={"#"}>
                    <a>aside menu</a>
                  </Link>
                </S.AsideItem>
              </S.AsideList>
            </S.SubItem>
            <S.SubItem>
              <Link href={"#"}>
                <a>sub menu</a>
              </Link>
            </S.SubItem>
            <S.SubItem>
              <Link href={"#"}>
                <a>sub menu</a>
              </Link>
            </S.SubItem>
          </S.SubList>
        </S.Item>
        {/* <S.Item clickedItem={clickedItem === "products"}>
          <Link href={"/products"}>
            <a>Products</a>
          </Link>
          <S.SubList>
            <S.SubItem clickedItem={clickedItem === "products"}>
              <Link href={"/products/#"}>
                <a>sub menu</a>
              </Link>
              <S.AsideList>
                <S.AsideItem>
                  <Link href={"#"}>
                    <a>aside menu</a>
                  </Link>
                </S.AsideItem>
                <S.AsideItem>
                  <Link href={"#"}>
                    <a>aside menu</a>
                  </Link>
                </S.AsideItem>
                <S.AsideItem>
                  <Link href={"#"}>
                    <a>aside menu</a>
                  </Link>
                </S.AsideItem>
              </S.AsideList>
            </S.SubItem>
            <S.SubItem>
              <Link href={"/products/#"}>
                <a>sub menu</a>
              </Link>
            </S.SubItem>
            <S.SubItem>
              <Link href={"/products/#"}>
                <a>sub menu</a>
              </Link>
            </S.SubItem>
          </S.SubList>
        </S.Item> */}
        <S.Item clickedItem={clickedItem === "blog"}>
          <Link href={"/blog"}>
            <a>Blog</a>
          </Link>
        </S.Item>
        <S.Item clickedItem={clickedItem === "about"}>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </S.Item>
        {/* <S.Item clickedItem={clickedItem === "register"}>
          <Link href={"/auth/register"}>
            <a>Sign up</a>
          </Link>
        </S.Item> */}
        <S.Item clickedItem={clickedItem === "signin"}>
          {status === "authenticated" ? (
            <a onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
              Sign out
            </a>
          ) : (
            <Link href={"/auth/signin"}>
              <a>Sign in</a>
            </Link>
          )}
        </S.Item>
        {/* <S.Item
          clickedItem={clickedItem === "login"}
          // className="authBtn"
          // onClick={(e) => {
          //   // auth
          //   // if (authBtnLabel === "login") {
          //   //   FB.login((response) => {
          //   //     // after login, set the input value.
          //   //     setLoginStatus(response);
          //   //     console.log("login-response : ", response);
          //   //   });
          //   // } else {
          //   //   FB.logout((response) => {
          //   //     // after logout, set the input value.
          //   //     setLoginStatus(response);
          //   //     console.log("logout-response : ", response);
          //   //   });
          //   // }
          // }}
        >
          {auth ? (
            <a onClick={logout}>Sign Out</a>
          ) : (
            <Link href={"/auth/login"}>
              <a>Sign In</a>
            </Link>
          )}
        </S.Item> */}
        {status === "authenticated" && (
          <S.Item clickedItem={clickedItem === "admin"}>
            <Link href={"/auth/admin"}>
              <a>Admin</a>
            </Link>
          </S.Item>
        )}
      </S.List>

      <S.Hamburger isClicked={isClicked} onClick={handleClick}>
        {isClicked ? <FaTimes size={30} /> : <FaBars size={30} />}
      </S.Hamburger>
    </S.Container>
  );
};

export default Navigation;
