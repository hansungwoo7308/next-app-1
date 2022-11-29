import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 3px solid red; */

  a {
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    text-transform: uppercase;
  }
  a:hover {
    color: #fff;
  }
`;

// Logo --------------------------------
export const Logo = styled.div`
  /* ${(props) => {
    if (props.clickItem) {
      return css`
        color: coral;
        &:hover > a {
          color: coral;
        }
        ul {
          color: #ccc;
        }
      `;
    }
  }} */
`;

// Menu --------------------------------
export const List = styled.ul`
  height: 100%;
  display: flex;
  gap: 3rem;
  list-style: none;
  position: relative;
  /* border: 3px solid red; */
  /* align-items: center; */

  .authBtn {
    border: 1px solid coral;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: var(--header-height);
    left: ${(props) => (props.isClicked ? 0 : "-100%")};
    // 컴포넌트의 상태에 따라 변경(스타일)...
    background-color: rgba(0, 0, 0, 0.7);
    transition: left 0.5s;
    z-index: 100;
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

  ${(props) => {
    if (props.clickItem) {
      return css`
        color: coral;
        &:hover > a {
          color: coral;
        }
        ul {
          color: #ccc;
        }
      `;
    }
  }}

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

    // Item:hover > SubList
    &:hover > ul {
      display: none;
    }
  }
`;

// Sub Menu --------------------------------
export const SubList = styled.ul`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  display: none;
  /*  */
  /* border: 1px solid red; */
  background-color: #111;
  gap: 10px;
  padding: 10px;
`;

export const SubItem = styled.li`
  position: relative;
  white-space: nowrap;
  /*  */
  /* background-color: lightseagreen; */

  a {
    padding: 10px;
  }

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

// Hamburger --------------------------------
export const Hamburger = styled.div`
  width: 80px;
  height: 100%;
  text-align: center;
  display: none;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
