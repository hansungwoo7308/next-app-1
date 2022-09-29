import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Item from "../../src/components/Item";

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [
    //   { params: { id: "740" } },
    //   { params: { id: "730" } },
    //   { params: { id: "729" } },
    // ],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

// context 가 로그에 찍히지 않는다...
// Server Environment
export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return { props: { item: data, name: process.env.name } };
}

const Post = ({ item, name }) => {
  // console.log(item);
  // const router = useRouter();
  // const { id } = router.query;
  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // const getData = ( ) => {
  //   Axios.get(API_URL).then((res) => {
  //     // console.log(res.data);
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const router = useRouter();
  console.log(router.isFallback);

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        {/* <Loader active inline="centered">
          Loading
        </Loader> */}
        <h1>test</h1>
      </div>
    );
  }

  return (
    <>
      {/* {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )} */}

      {/* {isLoading ? (
        <Loader active inline="centered" style={{ margin: "100px" }}>
          Loading
        </Loader>
      ) : (
        <Item item={item} />
      )} */}
    </>
  );
};

export default Post;
