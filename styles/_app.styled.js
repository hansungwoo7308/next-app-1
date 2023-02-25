import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px dashed red; */
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    /* scroll-padding-top: 100px; */
  }

  // Tag -----------------------------------------

  a{
    text-decoration: none;
    color: inherit;
  }

  

  :root{
    // --identifier-attribute (Using...)
    --main--color: #00704a;
    --main-color: #00704a;
    --second--color: #1e3932;
    --base-color: #000;
    --header-height: 70px;
    --footer-height: 300px;
    /* --height-footer: 300px; */


    /////////////////////////////////////////////////
    // --attribue-identifier

    // Colors
    --color-main: #00704a;
    --color-second: #1e3932;

    --color-black: #000;
    --color-white: #fff;
    --color-primary: #00704a;

    // Fonts
    --font-size-small: 12px;
    --font-size-medium: 16px;
    --font-size-large: 24px;

    // Height
    --height-header: 70px;
    --height-footer: 500px;

    // Width
    --width-layout: 500px

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

  ul {
    list-style: none;
  }


  // Class -----------------------------------------

  .container {
    width: 100%;
    height: calc(100vh - var(--height-header));
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
