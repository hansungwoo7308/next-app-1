// modules
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Head from "next/head";
import { ImSpinner8, ImSpinner3 } from "react-icons/im";
import { useSession, signIn, signOut } from "next-auth/react";

// custom modules
import useAuth from "../core/hooks/useAuth";
import * as S from "../styles/pages/Home.styled";
import Slider from "../src/components/Slider";
import Carousel from "../src/components/Carousel";
import Landing from "../src/components/Landing";

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

// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     // 프론트 서버에 쿠키 넣어주기
//     // console.log('getServerSideProps start');
//     console.log(context.req.headers);
//     const cookie = context.req ? context.req.headers.cookie : '';
//     // 브라우저에서 받은 요청에 쿠키가 있을 때만 넣어주기
//     axios.defaults.headers.Cookie = '';
//     if (context.req && cookie) {
//       axios.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch(
//       login.request({ eamil: 'email', password: 'password' }),
//     );
//     // dispatch가 끝났음을 알려줌
//     context.store.dispatch(END);
//     console.log('getServerSideProps end');
//     // saga의 비동기 이벤트 설정
//     // await context.store.sagaTask.toPromise();
//   },
// );

export async function getServerSideProps(context) {
  // console.log(
  //   `${YELLOW}backend  pages/ pre-render --------------------------------------------------------------${END}`
  // );

  // console.log("backend  context.response : ", context.res);

  // console.log("backend  context : ", context);
  // console.log("backend  context.req.headers : ", context.req.headers);
  // console.log("backend  context.req.cookies : ", context.req.cookies);

  // console.log("backend  context.req.url : ", context.req.url);
  // console.log("backend  context.query : ", context.query);
  // const test = JSON.stringify({ ...context });
  // console.log("backend  test : ", test);

  return {
    props: { data: "something" },
    // redirect: {
    //   destination: "/about",
    //   // permanent: false,
    // },
  };
}

export default function Home(props) {
  // react context module
  // const { auth, setAuth, isUserAuthenticated } = useAuth();
  // const { auth, signin, isUserAuthenticated, test } = useAuth();

  // next-auth session module
  const { data: session, status } = useSession();

  // const checkAuth = async () => {
  //   const response = await fetch("/api/checkAuth", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //     // credentials: "include",
  //   })
  //     .then((response) => {
  //       // console.log(
  //       //   "frontend /api/checkAuth response.json() : ",
  //       //   response.json()
  //       // );
  //       return response.json();
  //     })
  //     .catch((error) => console.log("frontend  error occurred"));
  //   console.log("frontend /api/checkAuth response : ", response);
  //   // console.log(
  //   //   "frontend /api/checkAuth response.authStatus : ",
  //   //   response.authStatus
  //   // );
  //   // if (response["authStatus"]) setAuth(true);
  //   // else setAuth(false);
  //   if (response?.authStatus) setAuth(true);
  //   else setAuth(false);
  // };

  // useEffect(() => {
  //   console.log(
  //     `${BLUE}frontend  pages/ sideEffect --------------------------------------------------------------${END}`
  //   );
  //   // checkAuth();
  // });

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

  // useEffect(() => {
  //   // console.log("pages/  signin() : ", signin());
  //   // const test = signin("jack", "123");
  //   // console.log("test : ", test);
  //   // signin("jack2", "123");
  //   // test("jack", "123");
  // }, []);

  const something = async () => {
    const result = await fetch("/api/auth/signin", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  };

  // logs
  console.log("");
  console.log(`${GREEN}/${END}`);
  // console.log("auth : ", auth);
  // console.log("isUserAuthenticated() : ", isUserAuthenticated());
  console.log("");

  return (
    // <S.Container>
    <>
      <S.Layout2>
        {/* <div>
          <button
            onClick={async (e) => {
              e.preventDefault();
              try {
                const response = await signIn("credentials", {
                  // signIn('credentials',payload)
                  // pages/api/auth/[...nextauth] 중에서
                  // CredentialProvider 가 하나이면
                  // authorize custom callback function 으로 인증을 구현하고
                  // 사용자 객체를 리턴한다.
                  username: "somethingId",
                  password: "somethingPassword",
                });
                console.log("twoends  signin  response : ", response);
              } catch (error) {
                console.log("twoends  signin  response error : ", error);
              }
            }}
          >
            Sign In
          </button>
          <br />
          <button onClick={() => signOut()}>Sign Out</button>
        </div> */}
        <div>
          <h1>testing...</h1>
          {/* <br /> */}
          {/* <button onClick={() => something()}>signin</button> */}
        </div>
      </S.Layout2>
      {/* {isUserAuthenticated() ? (
        <S.Container>
          <Head>
            <title>Beauty Product</title>
            <meta name="description" content="Beauty Product" />
          </Head>
          <S.Layout2>
            <h1>You have a accessToken.</h1>
          </S.Layout2>
        </S.Container>
      ) : (
        <S.Container>
          <Head>
            <title>Beauty Product</title>
            <meta name="description" content="Beauty Product" />
          </Head>
          <S.Layout2>
            <h1>You have not a accessToken.</h1>
          </S.Layout2>
        </S.Container>
      )} */}
    </>
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

/* <S.Layout2>
        <ImSpinner8 className="spinner" size={50} />
      </S.Layout2> */
/* <input
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
        <span id="name"></span> */
/* <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true"
        ></div> */
/* <Slider data={data} /> */
/* <Carousel /> */

/* <S.Home>
        <S.H1>Best Products</S.H1>
        <Items list={list.slice(0, 9)} />
        <S.H1>New Arrivals</S.H1>
        <Items list={list.slice(9)} />
      </S.Home> */

/* {isLoading ? (
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
      )} */
// </S.Container>
