import Link from "next/link";
import Navigation from "../Navigation";
import * as S from "../../../styles/Header.styled";
import { FaCoffee } from "react-icons/fa";

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link href="/">
          <a>
            {/* <h1>Logo</h1> */}
            <FaCoffee size={50} />
          </a>
        </Link>
      </S.Logo>

      <Navigation />
    </S.Container>
  );
};

export default Header;
