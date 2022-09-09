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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  border: 3px dashed pink;
`;

// Elements ////////////////////////////////////
export const Infomation = styled.div`
  width: 40%;
  border: 3px dashed;
`;

export const Headline = styled.h1`
  margin-bottom: 30px;
`;

export const Phrase = styled.p`
  margin-bottom: 20px;
`;

export const BuyButton = styled.button`
  width: 200px;
  border: none;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: coral;
  }
`;

export const Product = styled.div`
  width: 30%;
  max-width: 300px;
  border: 3px dashed;
`;
// export const Image = styled.img`
//   /* width: 40%;
//   height: 500px; */
//   width: 300px;
//   height: 300px;
//   border: 3px dashed pink;
//   object-fit: contain;
// `;

export const ProductButton = styled.div`
  border: 3px dashed;
  position: absolute;
  bottom: 5%;
  display: flex;
  gap: 50px;

  a {
    width: 100px;
    cursor: pointer;

    &:hover {
      /* border: 3px solid; */
      background: white;
    }
  }
`;
