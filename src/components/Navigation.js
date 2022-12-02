import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaWindowClose } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
// import { useSelector } from "react-redux";
import * as S from "../../styles/components/Navigation.styled";
import { Router, useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  // 햄버거 메뉴의 활성화/비활성화를 위한...
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // auth
  const authBtn = useRef();
  const [authBtnLabel, setAuthBtnLabel] = useState("Sign In");
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

  // Check the router pathname and Change the clickedItem state.
  const [clickedItem, setClickedItem] = useState("home");
  const changeClickedItem = () => {
    // console.log("router.pathname : ", router.pathname);
    if (router.pathname === "/") {
      setClickedItem("home");
    } else if (
      router.pathname === "/products"
      // ||
      // router.pathname === "/products*"
    ) {
      setClickedItem("products");
    } else if (router.pathname === "/about") {
      setClickedItem("about");
    } else if (router.pathname === "/auth/register") {
      setClickedItem("register");
    } else if (router.pathname === "/auth/login") {
      setClickedItem("login");
    }
  };

  useEffect(() => {
    changeClickedItem();
  });

  return (
    <S.Container>
      <S.Logo clickedItem={clickedItem === "home"}>
        <Link href="/">
          <a>
            <AiOutlineGlobal size={30} />
          </a>
        </Link>
      </S.Logo>

      <S.List isClicked={isClicked} onClick={handleClick}>
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
        <S.Item clickedItem={clickedItem === "products"}>
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
        </S.Item>
        <S.Item clickedItem={clickedItem === "about"}>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </S.Item>
        <S.Item clickedItem={clickedItem === "register"}>
          <Link href={"/auth/register"}>
            <a>Sign Up</a>
          </Link>
        </S.Item>
        <S.Item
          className="authBtn"
          ref={authBtn}
          onClick={(e) => {
            // auth
            // if (authBtnLabel === "login") {
            //   FB.login((response) => {
            //     // after login, set the input value.
            //     setLoginStatus(response);
            //     console.log("login-response : ", response);
            //   });
            // } else {
            //   FB.logout((response) => {
            //     // after logout, set the input value.
            //     setLoginStatus(response);
            //     console.log("logout-response : ", response);
            //   });
            // }
          }}
          clickedItem={clickedItem === "login"}
        >
          <Link href={"/auth/login"}>
            <a>Sign In</a>
          </Link>
        </S.Item>
      </S.List>

      <S.Hamburger isClicked={isClicked} onClick={handleClick}>
        {isClicked ? <FaTimes size={30} /> : <FaBars size={30} />}
      </S.Hamburger>
    </S.Container>
  );
};

export default Navigation;
