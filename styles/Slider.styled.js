import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  /* overflow: hidden; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${(props) => (props.left ? "2%" : null)};
  right: ${(props) => (props.right ? "2%" : null)};
  top: 50%;
  transform: translateY(-50%);
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  /* border: 3px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotButtonContainer = styled.div`
  // 자기 크기
  width: 100%;
  height: 50px;

  // 자기 정렬
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);

  // 자식 정렬
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  /* border: 3px dashed coral; */
`;

export const DotButton = styled.button`
  width: 10px;
  height: 10px;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => () => props.isClicked ? "black" : "white"};

  &:hover {
    background: coral;
  }
`;
