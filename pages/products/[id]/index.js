import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "../../../styles/pages/product.styled";

export const getStaticPaths = async () => {
  const data = await fetch(
    `https://picsum.photos/v2/list?page=2&limit=10`
    // "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  ).then((res) => res.json());
  const ids = data.map((item) => item.id); // [넘버 어레이] 만들기...
  // [오브젝 어레이] 만들기...
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  // const paths = ids.map((id) => {
  //   return {
  //     params: { id: id.toString() },
  //   };
  // });
  return {
    paths: paths,
    fallback: false,
  };
};

// getStaticPaths >>>>(context)>>>>> getStaticProps
// API 로부터 데이터를 가져오기(Fetch)하기 위해서는 아이디(id, identification)가 필요하다.
// getStaticPaths method 로부터 받아온 context object parameter 를 사용하여 아이디를 얻어온다.
export const getStaticProps = async (context) => {
  // console.log("context : ", context);
  // console.log("context.params : ", context.params);
  const { id } = context.params; // 파라미터로 넘어온 [id]
  const data = await fetch(
    `https://picsum.photos/id/${id}/info`
    // `https://jsonplaceholder.typicode.com/photos/${id}`
    // `https://picsum.photos/${id}`
  ).then((res) => res.json());
  return {
    props: {
      item: data,
    },
  };
};

const index = ({ item }) => {
  // console.log("item: ", item);
  // const { title, url, id } = item;
  const { author, download_url, id } = item;
  return (
    <S.Container className="container">
      <h1>
        {id}.&nbsp;&nbsp;{author}
      </h1>
      <S.Item>
        <Image
          src={download_url}
          layout="fill"
          alt="test"
          // src={item.url}
          // width={500}
          // height={500}
          // layout="responsive"
          // objectFit="cover"
        />
        {/* <img
          // src={url}
          src={download_url}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        /> */}
      </S.Item>
      <Link href={`/products`}>
        <a>Go to Products Page</a>
      </Link>
    </S.Container>
  );
};

export default index;
