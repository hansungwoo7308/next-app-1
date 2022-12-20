import * as S from "../styles/_app.styled";
import Header from "../src/components/layout/Header";
import { wrapper } from "../core/redux/store";
import Footer from "../src/components/layout/Footer";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import App from "next/app";

// Page Layout Setting
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  // const checkLoginStatus = async () => {
  //   const response = await fetch("/api/isLogin", {
  //     // headers: {
  //     //   // Authorization: "Bearer test",
  //     // },
  //     credentials: "include",
  //   })
  //     .then((response) => response.json())
  //     .catch((error) => console.log("frontend  error occurred"));
  //   console.log("frontend isLogin : ", response);
  // };

  // useEffect(() => {
  //   // console.log("frontend next-app-1 rendered ------------------------");

  //   // console.log("backend  router.pathname : ", router.pathname);

  //   // checkLoginStatus();

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

  const authCheck = async (routerPathname) => {
    // console.log("authCheck");
    const data = await fetch("/pages/api/isLogin").then((res) => res.json());
    if (data.status === "login") {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  const checkLoginStatus = async () => {
    console.log("check...");
    const response = await fetch("/api/isLogin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
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
    // if (response.authStatus) setAuth(true);
    // else setAuth(false);
  };

  useEffect(() => {
    checkLoginStatus();
    console.log("frontend _app.js authStatus : ", auth);
  });

  return (
    <S.Container>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js"
      />

      <S.GlobalStyles />
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </S.Container>
  );
};

// export const getInitialProps = (context) => {
//   console.log("backend  getInitialProps");
//   return {
//     props: {},
//   };
// };

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
