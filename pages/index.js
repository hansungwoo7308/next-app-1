import Head from "next/head";
import * as S from "../styles/pages/Home.styled";
import Slider from "../src/components/Slider";
import Carousel from "../src/components/Carousel";
import Landing from "../src/components/Landing";
import { useSelector } from "react-redux";
import { ImSpinner8, ImSpinner3 } from "react-icons/im";
import { useEffect, useState } from "react";
// import Axios from "axios";

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

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

export async function getServerSideProps(context) {
  console.log(
    `${YELLOW}backend  pages/ pre-render --------------------------------------------------------------${END}`
  );

  // console.log("backend  context : ", context);
  // console.log("backend  context.req.headers : ", context.req.headers);
  // console.log("backend  context.req.rawHeaders : ", context.req.rawHeaders);
  // console.log("backend  context.req.url : ", context.req.url);
  // console.log("backend  context.req.cookies : ", context.req.cookies);
  // console.log("backend  context.query : ", context.query);

  return {
    props: { data: "payload" },
    // redirect: {
    //   destination: "/about",
    //   // permanent: false,
    // },
  };
}

export default function Home(props) {
  console.log(
    `${BLUE}frontend  pages/ render --------------------------------------------------------------${END}`
  );
  // console.log("frontend Home");
  const [auth, setAuth] = useState(false);

  const checkLoginStatus = async () => {
    console.log("check...");
    const response = await fetch("/api/isLogin", {
      headers: {
        Authorization: "Bearer " + "test",
      },
      // credentials: "include",
    })
      .then((response) => {
        // console.log(
        //   "frontend /api/isLogin response.json() : ",
        //   response.json()
        // );
        return response.json();
      })
      .catch((error) => console.log("frontend  error occurred"));
    console.log("frontend /api/isLogin response : ", response);
    // console.log(
    //   "frontend /api/isLogin response.authStatus : ",
    //   response.authStatus
    // );
    // if (response["authStatus"]) setAuth(true);
    // else setAuth(false);
  };

  useEffect(() => {
    checkLoginStatus();
  }, [auth]);

  // console.log("props : ", props);

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
  // const setLoginStatus = (response) => {
  //   if (response.status === "connected") {
  //     document.querySelector("#authBtn").value = "logout";
  //     FB.api("/me", function (response) {
  //       document.querySelector("#name").innerHTML =
  //         "\tWelcome, " + response.name;
  //       // console.log("api-response : ", response);
  //     });
  //     // console.log("connected");
  //   } else {
  //     document.querySelector("#authBtn").value = "login";
  //     document.querySelector("#name").innerHTML = "";
  //     // console.log("not connected");
  //   }
  // };

  // useEffect(() => {
  //   window.fbAsyncInit = function () {
  //     // FB.init({
  //     //   appId: "1336989357119247",
  //     //   autoLogAppEvents: true,
  //     //   xfbml: true,
  //     //   version: "v15.0",
  //     // });

  //     console.log("initialize the facebook login API.");
  //     FB.init({
  //       appId: "1336989357119247",
  //       cookie: true, // Enable cookies to allow the server to access the session.
  //       xfbml: true, // Parse social plugins on this webpage.
  //       version: "v15.0", // Use this Graph API version for this call.
  //     });

  //     FB.getLoginStatus(
  //       setLoginStatus
  //       // function (response) {
  //       // Called after the JS SDK has been initialized.
  //       // statusChangeCallback(response);        // Returns the login status.
  //       // console.log("response : ", response);
  //       // }
  //     );
  //   };
  // }, []);

  return (
    <S.Container>
      <Head>
        <title>Beauty Product</title>
        <meta name="description" content="Beauty Product" />
      </Head>

      <S.Layout2>
        <ImSpinner8 className="spinner" size={50} />
        {/* <ImSpinner3 className="spinner" size={50} /> */}
        {/* <input
          type="button"
          id="authBtn"
          value="checking..."
          onClick={(e) => {
            // branch
            if (e.target.value === "login") {
              FB.login((response) => {
                // after login, set the input value.
                setLoginStatus(response);
                console.log("login-response : ", response);
              });
            } else {
              FB.logout((response) => {
                // after logout, set the input value.
                setLoginStatus(response);
                console.log("logout-response : ", response);
              });
            }
          }}
        />
        <span id="name"></span> */}
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

// Server Side
