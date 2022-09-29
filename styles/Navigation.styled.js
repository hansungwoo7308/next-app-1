import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

// Main Menu --------------------------------
export const List = styled.ul`
  height: 100%;
  display: flex;
  gap: 3rem;
  list-style: none;
  position: relative;
  /* align-items: center; */
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:hover {
    color: #fff;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  transition: all 0.5s;
  font-weight: bold;
  position: relative;
  &::after {
    content: "";
    transition: all 0.5s;
    width: 0;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
  }
  a {
    padding: 10px;
  }

  // Item:hover > after
  &:hover::after {
    width: 100%;
    background-color: #ddd;
  }

  // Item:hover > SubList
  &:hover > ul {
    display: flex;
  }

  @media screen and (max-width: 1000px) {
    height: auto;

    // Item:hover > after
    &:hover::after {
      background-color: transparent;
    }
  }
`;

// Sub Menu --------------------------------
export const SubList = styled.ul`
  // 기본설정
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  display: none;

  // 추가설정
  /* border: 1px solid red; */
  background-color: #111;
  gap: 10px;
  padding: 10px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SubItem = styled.li`
  position: relative;
  white-space: nowrap;
  /* background-color: lightseagreen; */

  // Asdie Menu Setting
  &:hover > ul {
    display: flex;
  }
`;

// Aside Menu --------------------------------
export const AsideList = styled.ul`
  // 기본설정
  position: absolute;
  top: 0;
  left: 100%;
  /* left: 90px; */
  /* clear: both; */
  display: flex;
  flex-direction: column;
  gap: 10px;

  // 추가설정
  list-style: none;
  background-color: #222;
  padding: 10px;
  display: none;
`;
export const AsideItem = styled.li`
  height: 30px;
  white-space: nowrap;
  /* background-color: skyblue; */
`;

/////
export const Hamburger = styled.h1`
  width: 80px;
  height: 100%;
  text-align: center;
  display: none;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
