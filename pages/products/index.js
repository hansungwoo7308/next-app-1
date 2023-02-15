import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { wrapper } from "../../core/redux/store";
import * as S from "../../styles/pages/products.styled";

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

// // (Wrapping...)
// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//   const data = await fetch(
//     `https://picsum.photos/v2/list?page=2&limit=10`
//     // `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
//     // `http://localhost:8080/api/posts`
//   ).then((data) => data.json());
//   // console.log("-----------------------------\nstore : ", store);
//   return {
//     props: {
//       items: data,
//     },
//   };
// });

// 클라이언트에서 요청시 서버에서 실행...
// export const getServerSideProps = async (context) => {
//   // console.log("context by getServerSideProps : ", context);
//   const res = await fetch(
//     `https://picsum.photos/v2/list?page=2&limit=10`
//     // `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//     // `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       items: data,
//     },
//   };
// };

// 서버에서 빌드시 실행...
export const getStaticProps = async (context) => {
  // console.log("context by getStaticProps : ", context);
  const data = await fetch(
    `https://picsum.photos/v2/list?page=2&limit=10`
    // `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
    // `http://localhost:8080/api/posts`
  ).then((data) => data.json());

  return {
    props: {
      items: data,
      // revalidate: 20, // 처음 접속후 20초후에 리제너레이션
    },
  };
};

// const Product = () => {
const Products = ({ items }) => {
  console.log(
    `${GREEN}twoends  pages/products --------------------------------------------------------------${END}`
  );

  // console.log("items : ", items);

  return (
    <S.Container>
      <S.Layout>
        <Head>
          <title>Products</title>
        </Head>
        <S.List>
          {items.map((item) => {
            return (
              <S.Item key={item.id}>
                <Link href={`/products/${item.id}`}>
                  <a>
                    <Image
                      src={item.download_url}
                      layout="fill"
                      alt="test"
                      objectFit="cover"
                      // src={item.url}
                      // width={300}
                      // height={300}
                      // placeholder="blur"
                    />
                  </a>
                </Link>
              </S.Item>
            );
          })}
        </S.List>
      </S.Layout>
    </S.Container>
  );
};

export default Products;
