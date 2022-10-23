import * as S from "../styles/_app.styled";
import Header from "../src/components/layout/Header";
import { wrapper } from "../core/redux/store";
import Footer from "../src/components/layout/Footer";

// Page Layout Setting
const MyApp = ({ Component, pageProps }) => {
  return (
    <S.Container>
      <S.GlobalStyles />
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
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

// export default MyApp;
export default wrapper.withRedux(MyApp);
