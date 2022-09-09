import { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import * as S from "../../styles/Slider.styled";

const data = [
  {
    title: "image1",
    url: "https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177_960_720.jpg",
  },
  {
    title: "image2",
    url: "https://cdn.pixabay.com/photo/2021/11/14/12/53/ship-6794508_960_720.jpg",
  },
  {
    title: "image3",
    url: "https://cdn.pixabay.com/photo/2022/08/03/08/11/sea-7362107_960_720.jpg",
  },
];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    setImageIndex(imageIndex + 1);
    if (imageIndex === data.length - 1) {
      setImageIndex(0);
    }
  };

  const prev = () => {
    setImageIndex(imageIndex - 1);
    if (imageIndex === 0) {
      setImageIndex(data.length - 1);
    }
  };

  const move = (index) => {
    setImageIndex(index);
  };

  return (
    <S.Container>
      <S.Image src={data[imageIndex].url} />
      <S.ArrowButton onClick={prev} left>
        <IoMdArrowDropleftCircle fill="white" size={100} />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
        </svg> */}
      </S.ArrowButton>
      <S.ArrowButton onClick={next} right>
        <IoMdArrowDroprightCircle fill="white" size={100} />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
        </svg> */}
      </S.ArrowButton>
      <S.DotButtonContainer>
        {data.map((item, index) => (
          <S.DotButton
            onClick={() => {
              move(index);
            }}
            isClicked={imageIndex === index}
            key={index}
          />
        ))}
      </S.DotButtonContainer>
    </S.Container>
  );
};

export default Slider;
