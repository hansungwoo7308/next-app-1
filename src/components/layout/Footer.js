import * as S from "../../../styles/components/layout/Footer.styled";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  return (
    <S.Container>
      <S.Layout>
        <S.Box className="">
          <h1>VIZZA</h1>
          <p>Frontend Developer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            distinctio consequatur provident impedit aspernatur quidem animi
            atque, qui cum nostrum a architecto deserunt soluta aut similique
            omnis rem laboriosam. Exercitationem?
          </p>
          <S.Icons>
            <Link href={"#"}>
              <a>
                <FaGithub size={30} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <FaFacebook size={30} />
              </a>
            </Link>
            {/* <Link href={"#"}>
              <a>
                <FaTwitter size={30} />
              </a>
            </Link> */}
          </S.Icons>
          {/* <S.Icons>
            <Link href={"#"}>
              <a>
                <FaGithub size={30} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <FaFacebook size={30} />
              </a>
            </Link>
          </S.Icons> */}

          <div>
            <small>Copyright</small>
          </div>
        </S.Box>

        <S.Box>
          <div>
            <h1>Title</h1>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div>
            <h1>Title</h1>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div>
            <h1>Title</h1>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div>
            <h1>Title</h1>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
        </S.Box>
      </S.Layout>
    </S.Container>
  );
};

export default Footer;
