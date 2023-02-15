import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-black);
`;

export const Layout = styled.div`
  width: 80%;
  height: calc(100vh - var(--header-height));
  min-width: 500px;
  border: 3px dashed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
