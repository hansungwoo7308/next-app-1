import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: var(--header-height);
  /* height: calc(100vh - var(--header-height)); */
  /* border: 3px dashed black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;

export const Layout = styled.div`
  width: 80%;
  height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px dashed;
`;

export const Notice = styled.pre`
  min-width: 800px;
  min-height: 300px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  /* align-items: center; */
  /* gap: 30px; */
  border: 3px dashed;
  div {
    /* border: 1px dashed; */
    /* flex-grow: 1; */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* div {
      flex-grow: initial;
    } */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 3px dashed green;
  padding: 100px;
  background-color: #ddd;
  border-radius: 15px;
`;

export const Label = styled.label``;

// input tag default properties
// outline : none
// border : 3px solid color
// 동서남북으로 양각과 음각으로 기본값이 셋팅되어 있음
// 초기값으로 보더를 설정해주어야 좋음

export const Input = styled.input`
  min-width: 250px;
`;
export const Button = styled.button``;
