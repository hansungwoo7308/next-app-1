import Link from "next/link";
import { useState } from "react";
import * as S from "../../styles/Navigation.styled";

const Navigation = () => {
  // 햄버거 메뉴의 활성화/비활성화를 위한...
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.Container>
      <S.List isClicked={isClicked} onClick={handleClick}>
        <S.Item>
          <Link href={"/"}>
            <a href="">Home</a>
          </Link>
        </S.Item>
        <S.Item>
          <Link href={"/product"}>
            <a href="">Product</a>
          </Link>
        </S.Item>
        {/* <S.Item>
          <Link href={"/about"}>
            <a href="">About</a>
          </Link>
        </S.Item> */}
        <S.Item>
          <Link href={"/register"}>
            <a href="">Register</a>
          </Link>
        </S.Item>
        <S.Item>
          <Link href={"/login"}>
            <a href="">Login</a>
          </Link>
        </S.Item>
      </S.List>
      <S.Hamburger isClicked={isClicked} onClick={handleClick}>
        {isClicked ? "-" : "="}
      </S.Hamburger>
    </S.Container>
  );
};

export default Navigation;
