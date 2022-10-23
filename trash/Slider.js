import { useEffect, useRef, useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import * as S from "../../styles/components/Slider.styled";

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
  "",
];

const Slider = () => {
  // Indexing
  const [currentIndex, setCurrentIndex] = useState(0);

  // Width of item and items
  const [itemWidth, setItemWidth] = useState();
  const [itemsWidth, setItemsWidth] = useState();
  const items = useRef();
  // const item = useRef(null);

  const next = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      moveSlide(currentIndex + 1);
    }
    // else {
    //   setCurrentIndex(0);
    //   moveSlide(0);
    // }

    // console.log("currentIndex :", currentIndex);
    // // items.current.style = `width: ${itemsWidth}px;`;
    // if (currentIndex === data.length - 1) {
    //   setCurrentIndex(0);
    // } else {
    //   setCurrentIndex(currentIndex + 1);
    //   moveSlide(currentIndex + 1);
    //   // console.log("currentIndex :", currentIndex);
    // }
    // console.log("currentIndex :", currentIndex);

    // moveSlide(currentIndex * -itemWidth);
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      moveSlide(currentIndex - 1);
    }
    // else {
    //   setCurrentIndex(data.length - 1);
    //   moveSlide(data.length - 1);
    // }

    // if (currentIndex === 0) {
    //   setCurrentIndex(data.length - 1);
    //   items.current.style.left = (data.length - 1) * itemWidth + "px";
    //   // moveSlide((data.length - 1) * itemWidth);
    // } else {
    //   setCurrentIndex(currentIndex - 1);
    //   moveSlide(currentIndex - 1);
    // }
    // moveSlide(currentIndex * itemWidth);
  };

  const moveSlide = (number) => {
    items.current.style.left = -number * itemWidth + "px";
  };

  const move = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const item = document.querySelector(".item");
    const itemWidth = item.getBoundingClientRect().width;
    setItemWidth(itemWidth);
    const itemsWidth = itemWidth * data.length;
    setItemsWidth(itemsWidth);

    // const sliderWidth = slider.current.getBoundingClientRect().width;
    // setSliderWidth(sliderWidth);
    // const itemCurrent = item.current;
    // console.log("item : ", item);
    // console.log("itemCurrent : ", itemCurrent);
    // const itemWidth = item.current.getBoundingClientRect().width;
    // console.log("itemWidth : ", itemWidth);
    // console.log("itemWidth in useEffect : ", itemWidth);
    // console.log("itemsWidth in useEffect : ", itemsWidth);
  });

  // console.log("itemWidth in rendering : ", itemWidth);
  // console.log("itemsWidth in rendering : ", itemsWidth);
  // console.log("items : ", items);

  return (
    <S.Container>
      <S.Slider>
        <S.Items ref={items} width={itemsWidth + "px"}>
          {data.map((item, index) => {
            return (
              <S.Item
                // className={index === currentIndex ? "slide active" : "slide"}
                key={index}
                ref={item}
                className="item"
                width={itemWidth + "px"}
              >
                <S.Image
                  // className={
                  //   // transition === "next"
                  //   //   ? "transition-next"
                  //   //   : transition === "prev"
                  //   //   ? "transition-prev"
                  //   //   : transition === "move"
                  //   //   ? "transition-move"
                  //   //   : null
                  // }
                  src={item.url}
                />
                {/* {index === currentIndex && (
                )} */}
              </S.Item>
            );
          })}
        </S.Items>
        <S.ArrowButton onClick={prev} left>
          <IoMdArrowDropleftCircle fill="white" size={100} />
        </S.ArrowButton>
        <S.ArrowButton onClick={next} right>
          <IoMdArrowDroprightCircle fill="white" size={100} />
        </S.ArrowButton>
        <S.DotButtonContainer>
          {data.map((item, index) => (
            <S.DotButton
              onClick={() => {
                move(index);
              }}
              isClicked={currentIndex === index}
              key={index}
            />
          ))}
        </S.DotButtonContainer>
      </S.Slider>
    </S.Container>
  );
};

export default Slider;
