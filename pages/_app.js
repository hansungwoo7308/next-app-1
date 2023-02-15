// modules
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
// import App from "next/app";

// custom mudules
import { AuthProvider } from "../core/provider/AuthProvider"; // for client state
// import { wrapper } from "../core/redux/store";

import Header from "../src/components/layout/Header";
// import Footer from "../src/components/layout/Footer";
import * as S from "../styles/_app.styled";

// 16진수 표기법
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

// data centralization
const MyApp = ({ Component, pageProps }) => {
  // console.log("_app   Component : ", Component); // 각 페이지
  // console.log("_app   pageProps : ", pageProps); // 각 페이지의 프로퍼티

  // const router = useRouter();
  // const [auth, setAuth] = useState(false);

  // console.log(`${GREEN}Component : ${(<Component />)}${END}`);
  // console.log(
  //   `${GREEN}frontend _app.js (server and client) -------------------------------------------------${END}`
  // );

  // const checkAuth = async () => {
  //   const response = await fetch("/api/checkLogin", {
  //     // headers: {
  //     //   // Authorization: "Bearer test",
  //     // },
  //     credentials: "include",
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  error occurred"));
  //   console.log("frontend checkLogin : ", response);
  // };

  // useEffect(() => {
  //   // console.log("frontend next-app-1 rendered ------------------------");
  //   // console.log("backend  router.pathname : ", router.pathname);
  //   // checkAuth();

  //   // 로그인 체크 - 초기값 설정
  //   // run auth check on initial load
  //   // console.log("auth : ", auth);
  //   // authCheck(router.pathname);
  //   // console.log("auth : ", auth);
  //   //
  //   // 로그인 체크하는 동안, 숨김처리하기 위해서 이벤트 등록 - hideContent
  //   // set authorized to false to hide page content while changing routes
  //   // const hideContent = () => setAuthorized(false);
  //   // router.events.on('routeChangeStart', hideContent);
  //   //
  //   // 이벤트 등록 - authCheck
  //   // run auth check on route change
  //   // router.events.on('routeChangeComplete', authCheck)
  //   //
  //   // 이벤트 해제 - authCheck, hideContent
  //   // unsubscribe from events in useEffect return function
  //   // return () => {
  //   //     router.events.off('routeChangeStart', hideContent);
  //   //     router.events.off('routeChangeComplete', authCheck);
  //   // }
  // }, [router.pathname]);

  // const checkAuth = async () => {
  //   const response = await fetch("/api/checkLogin", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //     // credentials: "include",
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  error occurred"));
  //   console.log("frontend /api/checkLogin response : ", response);
  //   // console.log(
  //   //   "frontend /api/checkLogin response.authStatus : ",
  //   //   response.authStatus
  //   // );
  //   // if (response.authStatus) setAuth(true);
  //   // else setAuth(false);
  //   if (response?.authStatus) setAuth(true);
  //   else setAuth(false);
  // };

  // useEffect(() => {
  //   // checkAuth();
  //   // console.log(
  //   //   `${RED}frontend _app.js (client) -------------------------------------------------${END}`
  //   // );
  //   // console.log(`${BLUE}frontend authStatus : ${auth}${END}`);
  // });

  return (
    <S.Container>
      <SessionProvider session={pageProps.session}>
        <AuthProvider>
          {/* facebook sdk */}
          <Script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js"
          />

          {/* styles */}
          <S.GlobalStyles />

          {/* include the navigation menu */}
          <Header />

          {/* page component */}
          <Component {...pageProps} />

          {/* <Footer /> */}
        </AuthProvider>
      </SessionProvider>
    </S.Container>
  );
};

// export const getInitialProps = wrapper.getInitialAppProps(
//   (store) => async (context) => {
//     console.log("teeeeeeeeeeeeest");
//     const myAppInitialProps = MyApp.getInitialProps(context);
//     return { ...myAppInitialProps };
//   }
// );

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const user = store.getState().user;
//     console.log("user", user);
//   }
// );

// MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (props) => {
//   const { Component, ctx } = props;
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   //Anything returned here can be accessed by the client
//   return { pageProps: pageProps, store: ctx.store };
// });

export default MyApp;
// export default wrapper.withRedux(MyApp);
