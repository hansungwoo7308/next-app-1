import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 3px dashed; */
`;
export const Carousel = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed;
  position: relative;

  & > button {
    position: absolute;
    /* z-index: 1000; */
    top: 10px;
    cursor: pointer;
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }
  .is_hidden {
    display: none;
  }
`;
export const CarouselTrackContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border: 1px dashed; */
  border: 3px solid coral;
  /* overflow: hidden; */
`;
export const CarouselTrack = styled.ul`
  /* display: flex; */
  width: 200px;
  height: 200px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 1s;

  li {
    width: 200px;
    height: 200px;
    position: absolute;
    border: 1px dashed green;
    opacity: 0.5;
  }

  /* li:nth-of-type(1) {
    background: #fff;
  }
  li:nth-of-type(2) {
    background: #eee;
  }
  li:nth-of-type(3) {
    background: #ddd;
  } */
`;
export const CarouselNav = styled.ul`
  width: 150px;
  height: 50px;
  position: absolute;
  bottom: 50px;
  border: 1px dashed green;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 50%;
    background-color: lightgray;
    cursor: pointer;
  }

  .current_dot {
    background-color: black;
  }
`;
