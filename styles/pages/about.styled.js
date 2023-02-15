import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main--color);
  color: #fff;
`;

export const Layout = styled.div`
  width: 80%;
  height: calc(100vh - var(--header-height));
  min-width: var(--width-layout);
  border: 3px dashed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  /* gap: 50px; */
`;

export const Image = styled.div`
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid black;
`;

export const Info = styled.div`
  width: 400px;
  height: 50%;
  /* border: 3px dashed coral; */
  padding: 0 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  color: #eee;

  .introduce,
  .description,
  .information {
    color: #ddd;
  }

  .name {
    margin-bottom: 20px;
    color: #fff;
  }

  li {
    span {
      margin-left: 10px;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  /* border: 1px dashed; */
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px;
    /* border: 1px dashed; */
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      /* border: 1px solid red; */
      div {
        width: 200px;
        height: 10px;
        position: relative;
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 5px;
          background-color: #ddd;
          position: absolute;
          top: 0;
          left: 0;
        }
        &::after {
          content: "";
          height: 100%;
          border-radius: 5px;
          background-color: #000;
          position: absolute;
          top: 0;
          left: 0;
          animation-duration: 10s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.2, 0.5, 0.5, 1);
        }
      }
      .javascript {
        &::after {
          animation-name: javascript;
          @keyframes javascript {
            from {
              width: 0;
            }
            to {
              width: 80%;
            }
          }
        }
      }
      .reactjs {
        &::after {
          animation-name: reactjs;
          @keyframes reactjs {
            from {
              width: 0;
            }
            to {
              width: 85%;
            }
          }
        }
      }
      .nextjs {
        &::after {
          animation-name: nextjs;
          @keyframes nextjs {
            from {
              width: 0;
            }
            to {
              width: 80%;
            }
          }
        }
      }
      .reduxjs {
        &::after {
          animation-name: reduxjs;
          @keyframes reduxjs {
            from {
              width: 0;
            }
            to {
              width: 70%;
            }
          }
        }
      }
      .styledComponents {
        &::after {
          animation-name: styledComponents;
          @keyframes styledComponents {
            from {
              width: 0;
            }
            to {
              width: 95%;
            }
          }
        }
      }
    }
  }
`;

export const Tab = styled.div`
  width: 700px;
  height: 500px;
  border: 3px dashed;
  border-radius: 10px;
  padding: 30px;

  .tabMenus {
    display: flex;
    position: relative;
    text-align: center;
    cursor: pointer;
    /* background-color: #fff;
    color: #000; */
    /* border: 2px dashed red; */
    .focus {
      width: ${(props) => `${props.initialFocus}px`};
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 3px;
        background-color: coral;
      }
    }
    .tabMenu {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      padding: 10px;
      &:hover {
        color: #000;
      }
    }
    .tabMenu.active {
      color: coral;
      /* color: #fff; */
    }
  }

  .tabContents {
    height: calc(100% - 50px);
    padding: 20px;
    border-top: 3px solid;
    .tabContent {
      display: none;
    }
    .tabContent.active {
      display: block;
    }
  }
`;
