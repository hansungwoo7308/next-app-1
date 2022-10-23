import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { wrapper } from "../../core/redux/store";
import * as S from "../../styles/pages/products.styled";

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

  const test = "asdasd";

  return {
    props: {
      // items: test,
      test: test,
      items: data,
      // revalidate: 20, // 처음 접속후 20초후에 리제너레이션
    },
  };
};

// const Product = () => {
const Products = ({ items, test }) => {
  console.log("test : ", test);
  // console.log("items : ", items);

  // const test = () => {
  //   const promise = fetch(`https://picsum.photos/v2/list?page=2&limit=10`).then(
  //     (response) => {
  //       // console.log("response : ", response);
  //       console.log("response.json() : ", response.json());
  //       return response;
  //     }
  //   );
  //   console.log("promise : ", promise);
  // };

  // useEffect(() => {
  //   test();
  // });

  console.log("redered.");

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
