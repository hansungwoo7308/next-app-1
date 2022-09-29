import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Layout = styled.div`
  width: 80%;
  height: 100%;
  min-width: 1000px;
  border: 3px dashed white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  color: #ddd;

  a:hover {
    color: white;
  }
`;
