import Navigation from "../Navigation";
import * as S from "../../../styles/components/layout/Header.styled";

const Header = () => {
  return (
    <S.Container>
      <S.Layout>
        <Navigation />
      </S.Layout>
    </S.Container>
  );
};

export default Header;
