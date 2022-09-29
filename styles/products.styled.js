import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  height: calc(100vh - 80px);
  overflow: hidden;
`;

export const Layout = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px dashed blue;
`;

////////////////////////////////////////////

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 800px;
  min-width: 300px;
  padding: 100px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 100px;
  height: 100px;
  border: 2px solid;
  position: relative;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
  }
`;

export const Title = styled.h1``;
