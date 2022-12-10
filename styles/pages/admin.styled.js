import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: var(--header-height);
  /* height: calc(100vh - 80px); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layout = styled.div`
  width: 80%;
  height: calc(100vh - var(--header-height));
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  border: 3px dashed black;
`;

export const Admin = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px dashed green;
  border-radius: 15px;
  gap: 100px;
  background-color: #ddd;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* border: 3px dashed; */
  padding: 10px;
  /* gap: 20px; */
  width: 100%;
  height: 50%;
`;
export const Image = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  img {
    border: 5px solid coral !important;
    border-radius: 50%;
    pointer-events: none;
  }
`;
export const Info = styled.div`
  width: 50%;
  max-height: 150px;

  h5 {
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    overflow: contain;
  }
`;

export const Button = styled.button`
  /* border: 3px solid red; */
  width: 200px;
  font-size: 18px;
  outline: none;
  padding: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: gray;
  color: #fff;

  &:hover {
    background-color: black;
  }
`;
