import Head from "next/head";
// import Items from "../src/components/Items";
import Axios from "axios";

// Styles
import * as S from "../styles/Home.styled";
import Slider from "../src/components/Slider";
import Landing from "../src/components/Landing";
// import { Divider, Header, Loader } from "semantic-ui-react";
// import { useEffect, useState } from "react";

export default function Home({ list }) {
  // Server Side Rendering
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // // Browser Environment
  // // "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  // const getData = () => {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     console.log("test");
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <S.Container>
      <Head>
        <title>Beauty Product</title>
        <meta name="description" content="Beauty Product" />
      </Head>

      <Landing />
      {/* <Slider /> */}

      {/* Static Site Generation */}
      {/* <S.Home>
        <S.H1>Best Products</S.H1>
        <Items list={list.slice(0, 9)} />
        <S.H1>New Arrivals</S.H1>
        <Items list={list.slice(9)} />
      </S.Home> */}

      {/* Server Side Rendering */}
      {/* {isLoading ? (
        <Loader active inline="centered" style={{ margin: "100px" }}>
          Loading
        </Loader>
      ) : (
        <>
          <Header>Best Products</Header>
          <Divider />
          <Items list={list.slice(0, 9)} />
          <Header>New Arrivals</Header>
          <Divider />
          <Items list={list.slice(9)} />
        </>
      )} */}
    </S.Container>
  );
}

// Static Site Generation
// return props of Home Page Component
// export async function getStaticProps() {
//   const apiUrl = process.env.apiUrl;
//   const res = await Axios.get(apiUrl);
//   const data = res.data;
//   return { props: { list: data, name: process.env.name } };
// }
