import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 3px dashed;
`;

export const Slider = styled.div`
  /* min-width: ${(props) => {
    return props.width + "px";
  }}; */
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* justify-content: center; */
  position: relative;
  /* overflow: hidden; */
  /* border: 3px dashed red; */

  /* .slide {
    transition: all 1s;
    opacity: 0;
  }
  .slide.active {
    opacity: 1;
  } */
`;

export const Items = styled.div`
  /* width: ${(props) => {
    console.log("props.width : ", props.width);
    console.log("props.length : ", props.length);
    console.log("props.width * props.length : ", props.width * props.length);
    return props.width * props.length + "px";
  }}; */
  width: ${(props) => {
    console.log("props.width : ", props.width);

    return props.width ? props.width : "100%";
  }};
  border: 3px solid purple;

  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* display: flex; */
  display: float;
  /* border: 3px solid red; */
  transition: all 1s ease-out;
`;

export const Item = styled.div`
  /* width: 100%; */
  width: ${(props) => {
    console.log("props.width(item) : ", props.width);
    return props.width ? props.width : "100%";
  }};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px dashed coral; */
  /* top: 0;
  left: 0; */
`;

export const Image = styled.img``;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${(props) => (props.left ? "5%" : null)};
  right: ${(props) => (props.right ? "5%" : null)};
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
  border: 3px solid red;
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
