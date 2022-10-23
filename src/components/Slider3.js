import { useLayoutEffect, useMemo } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import * as S from "../../styles/components/Slider.styled";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // 현재인덱스
  const [move, setMove] = useState(0); // 이동거리
  // const [direction, setDirection] = useState(); // 방향
  const slider = useRef(); // 슬라이더
  const prev = useRef(); // 이전버튼
  const next = useRef(); // 다음버튼
  const current = useRef(0);

  useEffect(() => {
    next.current.addEventListener("click", () => {
      console.log("next");

      // slider.current.style.transform = `translate(-100px)`;
      setMove(move - 10);
    });

    // Create and Read
    // const carousel = document.querySelector(".carousel");
    // const slider = document.querySelector(".slider");
    // const sliderChildren = Array.from(slider.children); // 인덱스, 랭스를 가져오기 위한 배열화
    // const sections = slider.querySelectorAll("section");
    // const prev = document.querySelector(".prev");
    // const next = document.querySelector(".next");
    // Setting Size
    // const sectionWidth = carousel.getBoundingClientRect().width;
    // sections.forEach((section) => (section.style.width = `${sectionWidth}px`));
    // const amountToMove = sectionWidth;
    // slider.style.width = `${amountToMove}px`;
    // sliderArray.forEach(
    //   (section) => (section.style.width = `${carouselWidth}px`)
    // );
    // section.style.width = `sliderWidth`;
    // console.log("carouselWidth : ", carouselWidth);
    // console.log("sliderWidth : ", sliderWidth);
    // slider.style.width = ``;
    // sections.forEach((section) => (section.style.width = `${carouselWidth}`));
    // const sectionBCR = section.getBoundingClientRect();
    // const carouselBCR = carousel.getBoundingClientRect();
    // const amountToMove = sliderArray[0].getBoundingClientRect().width;
    // console.log("carouselBCR : ", carouselBCR);
    // console.log("sectionBCR : ", sectionBCR);
    // slider.style.width = `${amountToMove * sliderArray.length}px`;
    // console.log("slider.style.width : ", slider.style.width);
    // console.log("sliderArray : ", sliderArray);
    // console.log("section.offsetWidth : ", section.offsetWidth);
    // console.log("section : ", section);
    // console.log(
    //   "slider.getBoundingClientRect() : ",
    //   slider.getBoundingClientRect()
    // );
    // console.log("amountToMove : ", amountToMove);
    // Update
    // Handler
    // next.addEventListener("click", () => {
    //   console.log("next");
    //   // const currentSlide = document.querySelector(".current-slide");
    //   // const nextSlide = currentSlide.nextElementSibling;
    //   // console.log("currentSlide : ", currentSlide);
    //   // currentIndex.current += 1;
    //   setCurrentIndex((currentIndex) => currentIndex + 1);
    //   setMove((move) => move - 20);
    //   // slider.style.transform = `translate(-${amountToMove}px)`;
    //   // slider.style.transform =
    //   // slider.style.left = `-200px`;
    //   // slider.style.transform = `translate(-${amountToMove}px)`;
    //   // setDirection(() => -1);
    //   // setMove(() => move - 20);
    //   // console.log("next");
    //   // console.log("slider : ", slider);
    // });
    // prev.addEventListener("click", () => {
    //   // setDirection(() => 1);
    //   // setMove(() => move + 20);
    //   console.log("prev");
    // });
    // console.log("sliderArray : ", sliderArray);
  });

  // const handleSorting = () => {
  //   const sliderLength = slider.current.childNodes.length;

  //   if (current > 1) {
  //     if (current <= 1) {
  //       setCurrent(() => sliderLength);
  //     }
  //     setCurrent(() => current - 1);
  //     slider.current.prepend(slider.current.lastChild);
  //     console.log("current : ", current);
  //   }

  //   if (current >= 1 && current < sliderLength) {
  //     if (current === sliderLength) {
  //       setCurrent(() => 1);
  //     }
  //     setCurrent(() => current + 1);
  //     slider.current.appendChild(slider.current.firstChild);
  //     console.log("current : ", current);
  //   }

  //   //   console.log(
  //   //     "slider.current.style.transition : ",
  //   //     slider.current.style.transition
  //   //   );
  // };

  // const handleMove = () => {
  //   // console.log("Moving...");
  //   setMove(() => 0);
  // };

  //   const handleSettingEffect = () => {
  //     console.log("Setting Effect...");
  //     slider.current.style.transition = `none`;
  //     slider.current.style.transition = `all 1s`;
  //   };

  console.log("render");
  return (
    <S.Container className="container">
      <S.Carousel className="carousel">
        <S.Slider
          className="slider"
          ref={slider}
          move={move}
          // onTransitionEnd={() => {
          //   // console.log("--------------Transition End--------------");
          //   // console.log("current : ", current);

          //   // console.log("is move zero ? : ", move);
          //   // const isMoveZero = move === 0 ? true : false; // flag... (판별문)
          //   // 결국, 플래그에 의해서 기준점이 만들어지고,
          //   // 현재의 상태 === 플래그 === 0 가 되면,,,
          //   // 트랜지션이 종료된 상태가 되고,
          //   // 슬라이더를 이동해주고, 정렬해주고, 트랜지션효과를 없애주고,,,

          //   // slider.current.style.transition = null;

          //   // Moving...
          //   handleMove();

          //   // Sorting...
          //   handleSorting(isMoveZero);

          //   // slider.current.style.transition = `all 1s`;

          //   // handleSettingEffect();
          // }}
        >
          <section>section 1</section>
          <section>section 2</section>
          <section>section 3</section>
          <section>section 4</section>
          <section>section 5</section>
        </S.Slider>
        <S.Controls className="controls">
          <button className="arrow prev" ref={prev}>
            prev
          </button>
          <button className="arrow next" ref={next}>
            next
          </button>
        </S.Controls>
      </S.Carousel>
    </S.Container>
  );
};

export default Slider;
