import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: calc(100vh - 80px);
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px dashed black;
  /* background-color: gray; */
`;

export const Form = styled.form`
  /* width: 50%; */
  min-width: 500px;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 3px dashed green;
  border-radius: 15px;
  background-color: #ddd;
`;
export const Title = styled.h1``;
export const Input = styled.input`
  width: 50%;
  padding: 10px;
`;
// export const Email = styled.input``;
// export const Password = styled.input``;
export const Button = styled.button`
  outline: none;
  /* margin-top: 30px; */
  width: 50%;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? "#eee" : "darkgray")};
`;
