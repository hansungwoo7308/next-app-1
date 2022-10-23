import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #00704a;
  position: relative;
  /* border: 3px dashed coral; */
`;

export const Layout = styled.div`
  /* width: 80%; */
  /* min-width: 1000px; */
  /* height: calc(100vh - var(--header-height)); */
  /* display: flex;
  align-items: center;
  justify-content: space-evenly; */
  position: relative;
  /* border: 3px dashed coral; */
`;

export const Infomation = styled.div`
  color: white;
  width: 400px;
  height: 400px;
  margin-bottom: 80px;
`;

export const Headline = styled.h1`
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: 900;

  /* animation */
  animation: headline 1s ease;
  animation-delay: 0.3s;
  @keyframes headline {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Phrase = styled.p`
  margin-bottom: 20px;

  /* animation */
  animation: phrase 1s ease;
  animation-delay: 0.3s;
  @keyframes phrase {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const BuyButton = styled.button`
  width: 200px;
  border: none;
  background-color: white;
  color: var(--main--color);
  font-weight: 800;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;

  &:hover {
    background-color: coral;
  }

  /* animation */
  animation: buybutton 1s ease;
  animation-delay: 0.3s;
  @keyframes buybutton {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Product = styled.div`
  height: 400px;
  /* border: 3px dashed; */
  margin-bottom: 80px;

  img {
    object-fit: contain;
  }
`;

export const ProductButton = styled.div`
  /* border: 3px dashed; */
  position: absolute;
  bottom: 80px;
  display: flex;
  gap: 20px;

  a {
    height: 100px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      /* border: 3px solid; */
      background: transparent;
      /* transform: scale(1.1); */
      transform: translateY(-10px);
    }
  }

  img {
    object-fit: contain;
  }
`;
