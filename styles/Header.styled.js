import styled from "styled-components";

export const Container = styled.div`
  /* border: 3px dashed red; */
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 10px;
  padding-bottom: 10px; */
  padding-left: 10%;
  padding-right: 10%;
  background-color: black;
  position: fixed;
  z-index: 100;
  /* color: white; */
  color: #ccc;

  a {
    /* border: 3px solid red; */
    height: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    /* justify-content: center; */
  }
`;

export const Logo = styled.div`
  &:hover {
    color: #fff;
  }
`;
