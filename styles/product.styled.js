import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);
  margin-top: 80px;
  gap: 30px;
  padding: 200px;
`;

export const Item = styled.div`
  width: 300px;
  height: 300px;
  border: 3px dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
`;
