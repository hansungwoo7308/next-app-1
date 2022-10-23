import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Layout = styled.div`
  width: 80%;
  min-width: 1000px;
  height: calc(100vh - var(--header-height));
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 3px dashed;
`;

export const Billboard = styled.div`
  border: 3px dashed var(--main--color);
  background: #ddd;
  border-radius: 15px;
  padding: 50px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    gap: 20px;
  }
`;

export const Form = styled.form`
  /* width: 50%; */
  min-width: 400px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 3px dashed green;
  border-radius: 15px;
  background-color: #ddd;
  padding: 100px;
`;

export const Div = styled.div``;

export const Input = styled.input`
  width: 200px;
`;

export const Button = styled.button`
  outline: none;
  width: 200px;
  padding: 10px;
  margin-top: 10px;
`;
