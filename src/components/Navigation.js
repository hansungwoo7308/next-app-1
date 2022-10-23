import Link from "next/link";
import { useRef, useState } from "react";
import { FaBars, FaTimes, FaWindowClose } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
// import { useSelector } from "react-redux";
import * as S from "../../styles/components/Navigation.styled";

const Navigation = () => {
  const focus = useRef("home");
  const clickItem = (item) => {
    console.log("item : ", item);
    focus.current = item;
  };

  // 햄버거 메뉴의 활성화/비활성화를 위한...
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };

  // console.log("focus.current : ", focus.current);
  // console.log("focus.current === 'home' : ", focus.current === "home");

  return (
    <S.Container>
      {/* Logo */}
      <S.Logo
        onClick={() => clickItem("home")}
        clickItem={focus.current === "home" ? true : false}
      >
        <Link href="/">
          <a>
            <AiOutlineGlobal size={30} />
          </a>
        </Link>
      </S.Logo>

      {/* Menu */}
      <S.List isClicked={isClicked} onClick={handleClick}>
        <S.Item
          onClick={() => clickItem("home")}
          clickItem={focus.current === "home" ? true : false}
        >
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
        <S.Item
          onClick={() => clickItem("product")}
          clickItem={focus.current === "product" ? true : false}
        >
          <Link href={"/products"}>
            <a>Products</a>
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
        <S.Item
          onClick={() => clickItem("about")}
          clickItem={focus.current === "about" ? true : false}
        >
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </S.Item>
        <S.Item
          onClick={() => clickItem("register")}
          clickItem={focus.current === "register" ? true : false}
        >
          <Link href={"/auth/register"}>
            <a>Sign Up</a>
          </Link>
        </S.Item>
        <S.Item
          onClick={() => clickItem("login")}
          clickItem={focus.current === "login" ? true : false}
        >
          <Link href={"/auth/login"}>
            <a>Sign In</a>
          </Link>
        </S.Item>
      </S.List>

      {/* Hambergur */}
      <S.Hamburger isClicked={isClicked} onClick={handleClick}>
        {isClicked ? <FaTimes size={30} /> : <FaBars size={30} />}
      </S.Hamburger>
    </S.Container>
  );
};

export default Navigation;
