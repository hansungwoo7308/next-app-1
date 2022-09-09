import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  /* border: 3px solid blue; */
  /* display: flex;
  justify-content: center; */
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 3px dashed red; */
    position: absolute;
    top: 80px;
    left: ${(props) => (props.isClicked ? 0 : "-100%")};
    background-color: rgba(0, 0, 0, 0.7);
    transition: left 0.5s;
  }
`;

export const Item = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 5px solid transparent;
  transition: all 0.5s;
  /* color: #ccc; */

  &:hover {
    /* border-bottom: 5px solid var(--main--color); */
    color: #fff;
    border-bottom: 5px solid white;
    /* border-bottom: 10px solid #1e3932; */
    /* height: 3px;
    border-bottom: 5px solid white; */
    /* border-color: #1e3932; */
  }

  @media screen and (max-width: 1000px) {
    &:hover {
      color: coral;
      border-bottom: 3px solid transparent;
    }
  }
`;

export const Hamburger = styled.h1`
  width: 80px;
  height: 100%;
  text-align: center;
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
