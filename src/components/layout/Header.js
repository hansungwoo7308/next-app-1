import Link from "next/link";
import Navigation from "../Navigation";
import * as S from "../../../styles/Header.styled";

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link href="/">
          <a>
            <h1>Logo</h1>
          </a>
        </Link>
      </S.Logo>

      <Navigation />
    </S.Container>
  );
};

export default Header;
