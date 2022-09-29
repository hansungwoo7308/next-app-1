import Link from "next/link";
import { useState } from "react";
import * as S from "../../styles/Landing.styled";

const Landing = () => {
  const [productIndex, setProductIndex] = useState("Coffee-1");

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
          <Link
            // href={"/products"}
            href={"#"}
          >
            <a>
              <img src={`/images/${productIndex}.png`} />
            </a>
          </Link>
        </S.Product>
        <S.ProductButton>
          <a onClick={() => setProductIndex("Coffee-1")}>
            <img src={"/images/Coffee-1.png"} alt="" />
          </a>
          <a onClick={() => setProductIndex("Coffee-2")}>
            <img src={"/images/Coffee-2.png"} alt="" />
          </a>
          <a onClick={() => setProductIndex("Coffee-3")}>
            <img src={"/images/Coffee-3.png"} alt="" />
          </a>
          <a onClick={() => setProductIndex("Coffee-4")}>
            <img src={"/images/Coffee-4.png"} alt="" />
          </a>
        </S.ProductButton>
      </S.Layout>
    </S.Container>
  );
};

export default Landing;
