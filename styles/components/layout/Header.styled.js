import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: var(--header-height);
  display: flex;
  justify-content: center;
  background-color: #000;
  color: #ccc;
  position: fixed;
  z-index: 100;
`;

export const Layout = styled.div`
  width: 80%;
  height: 100%;
  min-width: var(--width-layout);
  /* height: calc(100vh - var(--header-height)); */
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 3px dashed yellow; */
`;
