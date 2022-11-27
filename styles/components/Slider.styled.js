import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 700px;
  /* border: 3px dashed; */
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  /* border: 3px dashed coral; */
  position: relative;
  overflow: hidden;
`;

export const Slider = styled.div`
  width: 500%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  transition: all 0.5s;

  section {
    width: 20%;
    flex-basis: 20%; // N등분하여 20%의 가로길이를 가져간다.
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    /* border: 1px dashed green; */
    position: relative;
  }
`;
export const Controls = styled.div`
  .arrow {
    height: 100%;
    width: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    /* border: 1px solid red; */
  }
  .arrow:hover {
    color: white;
    background-color: rgba(3, 3, 3, 0.3);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
`;
