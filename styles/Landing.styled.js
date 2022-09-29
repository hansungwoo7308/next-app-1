import styled from "styled-components";

// Layout ////////////////////////////////////
export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  /* border: 3px dashed red; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00704a;
`;

export const Layout = styled.div`
  width: 80%;
  min-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* justify-content: center; */
  /* gap: 5%; */
  border: 3px dashed pink;
`;

// Elements ////////////////////////////////////
export const Infomation = styled.div`
  color: white;
  /* width: 40%; */
  width: 400px;
  height: 400px;
  /* border: 3px dashed; */
  /* padding: 20px; */
  margin-bottom: 80px;
`;

export const Headline = styled.h1`
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: 900;
`;

export const Phrase = styled.p`
  margin-bottom: 20px;
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
