import Link from "next/link";
import { useState } from "react";
import * as S from "../../styles/Landing.styled";

const Landing = () => {
  const [productIndex, setProductIndex] = useState(2);

  // const handleClick = (index) => {
  //   setProductIndex(index);
  // };

  return (
    <S.Container>
      <S.Layout>
        <S.Infomation>
          <S.Headline>Here is a something</S.Headline>
          <S.Phrase>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            necessitatibus eveniet corrupti iusto error deleniti nam sequi atque
            earum, blanditiis aspernatur distinctio enim excepturi recusandae
            facere impedit. Laboriosam, rerum id!
          </S.Phrase>
          <S.BuyButton>Buy Now</S.BuyButton>
        </S.Infomation>
        <S.Product>
          <Link href={"/products"}>
            <a href="">
              <img
                src={`/images/2022_Summer2_main_drink_0${productIndex}.png`}
              />
            </a>
          </Link>
        </S.Product>
        <S.ProductButton>
          <a onClick={() => setProductIndex(2)}>
            <img src={"/images/2022_Summer2_main_drink_02.png"} alt="" />
          </a>
          <a onClick={() => setProductIndex(3)}>
            <img src={"/images/2022_Summer2_main_drink_03.png"} alt="" />
          </a>
        </S.ProductButton>
      </S.Layout>
    </S.Container>
  );
};

export default Landing;
