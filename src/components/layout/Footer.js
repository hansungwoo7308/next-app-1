import * as S from "../../../styles/Footer.styled";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  return (
    <S.Container>
      <S.Layout>
        <h3>Contact me</h3>
        <S.Icons>
          <Link href={"#"}>
            <a>
              <FaGithub size={50} />
            </a>
          </Link>
          <Link href={"#"}>
            <a>
              <GoMail size={50} />
            </a>
          </Link>
        </S.Icons>
      </S.Layout>
    </S.Container>
  );
};

export default Footer;
