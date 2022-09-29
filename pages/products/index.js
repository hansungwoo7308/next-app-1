import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { wrapper } from "../../core/redux/store";
import * as S from "../../styles/products.styled";

// 클라이언트에서 요청시 서버에서 실행...(Wrapping...)
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const data = await fetch(
    `https://picsum.photos/v2/list?page=2&limit=10`
    // `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
    // `http://localhost:8080/api/posts`
  ).then((data) => data.json());
  // console.log("-----------------------------\nstore : ", store);
  return {
    props: {
      items: data,
    },
  };
});

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
// export const getStaticProps = async (context) => {
// console.log("context by getStaticProps : ", context);
//   const data = await fetch(
//     // `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
//     `https://picsum.photos/v2/list?page=2&limit=10`
//     // `http://localhost:8080/api/posts`
//   ).then((data) => data.json());
//   return {
//     props: {
//       items: data,
//       // revalidate: 20, // 처음 접속후 20초후에 리제너레이션
//     },
//   };
// };

const Product = ({ items }) => {
  // console.log("items : ", items);
  return (
    <S.Container className="container">
      <S.Layout>
        <Head>
          <title>Product</title>
        </Head>
        <S.List>
          {items.map((item) => {
            return (
              <S.Item key={item.id}>
                <Link href={`/products/${item.id}`}>
                  <a>
                    {/* <h1>{item.id}</h1> */}
                    {/* <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={item.url}
                  /> */}
                    <Image
                      // src={item.url}
                      src={item.download_url}
                      layout="fill"
                      alt="test"
                      objectFit="cover"
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

export default Product;
