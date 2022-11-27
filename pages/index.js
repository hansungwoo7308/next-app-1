import Head from "next/head";
import Axios from "axios";
import * as S from "../styles/pages/Home.styled";
import Slider from "../src/components/Slider";
import Carousel from "../src/components/Carousel";
import Landing from "../src/components/Landing";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { useEffect, useState } from "react";

// export const getStaticProps = async () => {
//   const ACCESS_KEY = `dOIA85pHFvSq2jSkD2L06etILKKN0oQCKZzJ3CNYCPE`;
//   // const URL = `https://api.unsplash.com/photos`;
//   const URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

//   const data = await fetch(URL).then((data) => data.json());

//   return {
//     props: {
//       data: data,
//     },
//   };
// };

export default function Home({ data }) {
  // console.log("data : ", data);
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

  // const test = useSelector((state) => state);
  // console.log("test : ", test);

  // ------------
  const callback = (response) => {
    console.log("init-response : ", response);

    if (response.status === "connected") {
      console.log("connected");
      document.querySelector("#authBtn").value = "logout";
    } else {
      console.log("not connected");
      document.querySelector("#authBtn").value = "login";
    }
  };

  useEffect(() => {
    window.fbAsyncInit = function () {
      // FB.init({
      //   appId: "1336989357119247",
      //   autoLogAppEvents: true,
      //   xfbml: true,
      //   version: "v15.0",
      // });

      FB.init({
        appId: "1336989357119247",
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: "v15.0", // Use this Graph API version for this call.
      });

      FB.getLoginStatus(
        callback
        // function (response) {
        // Called after the JS SDK has been initialized.
        // statusChangeCallback(response);        // Returns the login status.
        // console.log("response : ", response);
        // }
      );
    };
  });

  return (
    <S.Container>
      <Head>
        <title>Beauty Product</title>
        <meta name="description" content="Beauty Product" />
      </Head>

      <S.Layout2>
        {/* <h1>test</h1> */}
        <input
          type="button"
          id="authBtn"
          value="checking..."
          onClick={(e) => {
            if (e.target.value === "login") {
              FB.login((response) =>
                console.log("login-response : ", response)
              );
            } else {
              FB.logout((response) =>
                console.log("logout-response : ", response)
              );
            }
          }}
        />
        {/* <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true"
        ></div> */}
        {/* <Slider data={data} /> */}
        {/* <Carousel /> */}
      </S.Layout2>

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
// export async function getStaticProps() {
//   const apiUrl = process.env.apiUrl;
//   const res = await Axios.get(apiUrl);
//   const data = res.data;
//   return { props: { list: data, name: process.env.name } };
// }
