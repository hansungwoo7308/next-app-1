import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: calc(100vh - 80px);
  margin-top: 80px;
  border: 3px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const Input = styled.input``;
export const Button = styled.button``;
