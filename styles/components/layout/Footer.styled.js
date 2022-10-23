import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: var(--height-footer);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
`;

export const Layout = styled.div`
  width: 80%;
  height: 100%;
  min-width: 1000px;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: space-evenly; */
  /* gap: 20px; */
  border: 3px dashed white;
  padding: 50px;
`;

export const Box = styled.div`
  /* width: 100%; */
  height: 100%;
  /* border: 3px dashed; */
  padding: 20px;

  &:nth-of-type(1) {
    flex: 1;
  }

  &:nth-of-type(2) {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* gap: 20px; */

    div {
      min-width: 200px;
      /* border: 3px dashed coral; */
      h1 {
        margin-bottom: 14px;
      }
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  color: #ddd;

  a:hover {
    color: white;
  }
`;
