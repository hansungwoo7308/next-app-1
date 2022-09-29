import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px dashed purple; */

  /* @media screen and (max-width: 1000px) {
    width: 90%;
  } */
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }

  // Tag -----------------------------------------

  a{
    text-decoration: none;
    color: inherit;
  }

  :root{
    --main--color: #00704a;
    --second--color: #1e3932;
  }

  *::selection{
    color: #fff;
    /* background: var(--main--color); */
    background-color: coral;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: center; */
    /* border: 3px solid red; */
  }


  // Class -----------------------------------------

  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 3px dashed; */
  }

  .input {
    padding: 8px;

    // outline, border, background, color
    outline: none;
    border: 3px solid var(--main--color);
    border-radius: 5px;
    background-color: lightgreen;
    color: var(--main--color);

    &:hover,
    &:focus {
      border-color: coral;
      background-color: var(--main--color);
      color: #fff;
    }

    // placeholder
    &::placeholder {
      color: var(--main--color);
    }
    &:hover::placeholder,
    &:focus::placeholder {
      color: #fff;
    }
  }

  .button {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: darkgray;
    color: #fff;

    &:hover {
      background-color: black;
    }
  }
`;
