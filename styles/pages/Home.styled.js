import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

// 레이아웃은 페이지단에서만 정의하자
export const Layout1 = styled.div`
  width: 80%;
  min-width: 1000px;
  height: calc(100vh - var(--header-height));
  /* border: 3px dashed red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Layout2 = styled.div`
  width: 80%;
  min-width: 1000px;
  height: calc(100vh - var(--header-height));
  /* border: 3px dashed; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gray; */
`;
