import * as S from "../styles/_app.styled";
import Header from "../src/components/layout/Header";

// Page Layout Setting
function MyApp({ Component, pageProps }) {
  return (
    <S.Container>
      <S.GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </S.Container>
  );
}

export default MyApp;
