import Link from "next/link";
import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as S from "../../styles/Navigation.styled";

const Navigation = () => {
  // 햄버거 메뉴의 활성화/비활성화를 위한...
  const [isClicked, setIsClicked] = useState(false);

  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 리덕스 스토어 조회
  const result = useSelector((state) => state.users);
  console.log("result : ", result);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.Container>
      <S.List isClicked={isClicked} onClick={handleClick}>
        <S.Item>
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
        <S.Item>
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
        <S.Item>
          <Link href={"/auth/register"}>
            <a>Sign Up</a>
          </Link>
        </S.Item>
        <S.Item>
          <Link href={"/auth/login"}>
            <a>Sign In</a>
          </Link>
        </S.Item>
      </S.List>
      <S.Hamburger isClicked={isClicked} onClick={handleClick}>
        {isClicked ? <FaWindowClose size={30} /> : <FaBars size={30} />}
      </S.Hamburger>
    </S.Container>
  );
};

export default Navigation;
